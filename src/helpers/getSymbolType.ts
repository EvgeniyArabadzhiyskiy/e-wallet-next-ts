export const getSymbolType = (type: string) => {
  switch (type) {
    case "income":
      return "+";

    case "expense":
      return "-";

    default:
      console.log("Invalid type:", type);
      return "?";
  }
};
