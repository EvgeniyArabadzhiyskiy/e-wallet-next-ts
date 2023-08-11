"use client";
import { BASE_URL } from "@/src/constants/apiPath";
import { getQueryString } from "@/src/helpers/getQueryString";
import { useUser } from "@/src/hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ColorSpan, StyledFilters, StyledItem, StyledTable, StyledTableBody, StyledTableFooter, StyledTableHeader, StyledText } from "./StatTable.styled";
import { getCategoryColor } from "@/src/helpers/getCategoryColor";
import FilterDate from "../FilterDate/FilterDate";

const getStatistics = async ({ month, year }: {month: any, year: any}, token: string | undefined) => {
  //  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTM0ZGFhMTQyNGVhZDExNWVhNTJhNSIsImlhdCI6MTY5MTc0ODg4MiwiZXhwIjoxNjkyOTU4NDgyfQ.wX5MlU5cE2UST-YJbh2JJfalRB128gmH8JUZlq9_KV8'
  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    // cache: "no-store",
  };

  const res = await fetch(
    `${BASE_URL}${getQueryString({ month, year })}`,
    options
  )
    .then((data) => data.json())
    .then((data) => {
      //   console.log("fetch  data:", data);
      return data;
    });

  return res as unknown as any[];
};



interface IColor {
    [key: string]: string
}


function StatTable() {
  const { token, user } = useUser();

  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);

  const { data = [], error } = useQuery({
    queryKey: ["Statistics", { month, year }],
    queryFn: () => getStatistics({ month, year }, token),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    retry: 0,
    enabled: !!token,
  });
  console.log("PageStatistic  data:", data);

  const expensesData = data
    .filter((data: { type: string; }) => data.type !== 'income')  

  const expensesTotal = expensesData
    .reduce((total: number, data: { totalSum: any; }) => total + Number(data.totalSum), 0);

  const incomeTotal = data
    .filter((data: { type: string; }) => data.type === 'income')
    .reduce((total: number, data: { totalSum: any; }) => total + Number(data.totalSum), 0);

  return <>
  <StyledTable>
  <StyledFilters>
    <FilterDate setMonth={setMonth}  />
    <FilterDate  setYear={setYear} value={"Year"}/>
  </StyledFilters>
  
  <StyledTableHeader>
    <p>Category</p>
    <p>Sum</p>
  </StyledTableHeader>

  <StyledTableBody> 
    { expensesData.map(({ _id, totalSum }: { _id: keyof IColor, totalSum: number }) => {
      return (
        <li key={_id}>
          <StyledItem>
            <ColorSpan category={getCategoryColor(_id)}/>
            {_id}
          </StyledItem>
          <p>{totalSum}</p>
        </li>
      );
    })}            
  </StyledTableBody>

  <StyledTableFooter>
    <li>
      <p>Expenses:</p>
      <StyledText type="expense">{expensesTotal}</StyledText>
    </li>
    <li>
      <p>Income:</p>
      <StyledText type="income">{incomeTotal}</StyledText>
    </li>
  </StyledTableFooter>
</StyledTable>
</>;
}

export default StatTable;
