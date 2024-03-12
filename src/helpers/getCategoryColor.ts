import { categoryList } from "../constants/categoryList";

export const getCategoryColor = (label: string) => {
  for (const category in categoryList) {
    if (categoryList.hasOwnProperty(category)) {
      if (categoryList[category].label === label) {
        return categoryList[category].value;
      }
    }
  }
  return "#FF0000";
};
