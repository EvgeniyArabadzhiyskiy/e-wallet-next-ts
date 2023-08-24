import moment from "moment";

export const getFormattedMonth = (date: string, value: string) => {
  if (!date || value !== "Month") {
    return date;
  }

  return moment().month(date).format("MMMM");
};
