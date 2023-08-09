export const setTitleTransaction = (modalKey: string) => {
  switch (modalKey) {
    case "ADD":
      return "Add Transaction";

    case "EDIT":
      return "Edit Transaction";

    default:
      return "Unknown Transaction";
  }
};
