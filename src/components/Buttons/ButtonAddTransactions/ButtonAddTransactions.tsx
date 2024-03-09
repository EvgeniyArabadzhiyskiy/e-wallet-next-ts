import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "./ButtonAddTransactions.styled";
import { Dispatch, SetStateAction } from "react";
import { useModalWindow } from "@/src/hooks/useModalWindow";

interface IProps {
  setModalKey: Dispatch<SetStateAction<"ADD" | "EDIT">>;
}

function ButtonAddTransactions({setModalKey}: IProps) {
  const setModalToggle = useModalWindow((state) => state.setModalToggle);

  const onAddTransactions = () => {
    setModalToggle("transaction");
    setModalKey("ADD")
  };

  return (
    <Button type="button" onClick={onAddTransactions} aria-label="add-transaction">
      <FontAwesomeIcon icon={faPlus} size="xl" color="white" />
    </Button>
  );
}

export default ButtonAddTransactions;
