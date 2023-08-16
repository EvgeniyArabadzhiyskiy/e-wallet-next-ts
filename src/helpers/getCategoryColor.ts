import { IColor } from "../types/statistics";

const categoryList: IColor = {
  Food: "#f6a626",
  Main: "#fde047",
  House: "#a855f7",
  Auto: "#4bc0c0",
  Children: "#4ade80",
  Development: "#ff6385",
  Education: "#3b82f6",
  "Other expenses": "#00ad31",
};

export const getCategoryColor = (value: keyof IColor) => {
  const color = categoryList[value];

  return color;
};
