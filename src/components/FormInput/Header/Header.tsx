"use client";

import { getPokemonInfo } from "@/helpers/getPokemonInfo";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { StyledHeader, TextName } from "./Header.styled";
import { getUser } from "@/helpers/getUser";

interface UserData {
  email: string;
  firstName: string;
  balance: number;
}

// Partial<UserData> | undefined
export default function Header({ currentUser }: { currentUser?: any }) {
  // console.log("Header  currentUser:", currentUser);
  // const queryClient = useQueryClient();

  //   const { data, error, isError, isFetching } = useQuery({
  //     queryKey: ["User"],
  //     queryFn: getUser,
  //     staleTime: Infinity,
  //   });

  //   console.log("Header", data);

  // const queryUserData = queryClient.getQueryData<Partial<UserData>>(["User"]);
  // console.log("Header  queryUserData:", queryUserData);

  return (
    <StyledHeader>
      <TextName>{currentUser?.firstName}</TextName>
      {/* <pre>{data && JSON.stringify(data, null, 2)}</pre> */}
    </StyledHeader>
  );
}
