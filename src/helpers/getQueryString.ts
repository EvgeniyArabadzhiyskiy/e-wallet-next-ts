import { IStatPeriod } from "../types/statistics"

export const getQueryString = ({month, year}: IStatPeriod) => {
    if (month && year)  return `/transactions/statistics?month=${month}&year=${year}`
    if (year)  return `/transactions/statistics?year=${year}`
    if (month)  return `/transactions/statistics?month=${month}`
    return '/transactions/statistics'
  } 