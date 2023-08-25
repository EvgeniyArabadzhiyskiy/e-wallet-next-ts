"use client";
import stl from "./StatisticLoader.module.scss";
import styled from "styled-components";
import { PageTitle, TableWrapper } from "../Statistics/Statistics.styled";
import {
  Table,
  TableBody,
  TableHeader,
} from "../Statistics/StatTable/StatTable.styled";
import { StyledFilters } from "../FilterDate/FilterDate.styled";
import CrossSvg from "../SvgComponent/CrossSvg";


const ChartWrapper = styled.div`
  position: relative;
  align-self: flex-start;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    min-width: 300px;
  }
`;

export const Circle = styled.div`
  position: relative;
  margin: 0 auto;
  margin-bottom: 32px;
  width: 440px;
  height: 440px;
  background-color: #7c7772;
  border-radius: 50%;

  &::before {
    content: "";
    width: 95%;
    height: 95%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 50%;
    border: 45px dashed #2f2f31;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
    margin-bottom: 0;

    &::before {
      border: 35px dashed #2f2f31;
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  width: 280px;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 0 20px;

  border-radius: 10px;
  border: 2px solid #10b981;
  color: #a1a1aa;

  &:hover {
    border: 2px solid #a1a1aa;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    margin: 0;
  }
`;



const InnerCircle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 312px;
    height: 312px;
    background-color: #111827;
    border-radius: 50%;

    @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;

    
  }
`

const Item = styled.div`
  overflow: hidden;
  height: 52px;
  border-bottom: 1px solid #dcdcdf;
`;

function StatisticLoader() {
  return (
    <div style={{ width: 727 }}>
      <PageTitle>Statistics</PageTitle>
      <TableWrapper>
        <ChartWrapper>
          <Circle 
          className={stl.rotarion}
          >
            <InnerCircle></InnerCircle>
          </Circle>
        </ChartWrapper>

        <Table>
          <StyledFilters>
            <InputWrapper>
              <span>Month</span>
              <CrossSvg width={18} height={18} color="#a1a1aa" />
            </InputWrapper>
            <InputWrapper>
              <span>Year</span>
              <CrossSvg width={18} height={18} color="#a1a1aa" />
            </InputWrapper>
          </StyledFilters>
          <TableHeader>
            <p>Category</p>
            <p>Sum</p>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, i) => {
              return (
                <Item key={i}>
                  <div
                    style={{ animationDelay: `${i * 0.05}s` }}
                    className={stl.loading}
                  ></div>
                </Item>
              );
            })}
          </TableBody>
        </Table>
      </TableWrapper>
    </div>
  );
}

export default StatisticLoader;
