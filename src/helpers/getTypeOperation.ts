export const getTypeOperation = (value: boolean) => {
  switch (value) {
    case true:
      return "income";

    case false:
      return "expense";

    default:
      console.log("Invalid value for getTypeOperation");
      throw new Error("Invalid value for getTypeOperation");
  }
};
