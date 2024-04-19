import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "./ButtonAddTransactions.styled";
import { Dispatch, SetStateAction } from "react";
import { useModalWindow } from "@/src/hooks/useModalWindow";
import { TRANSACTION_KEY } from "@/src/constants/modalKey";

interface IProps {
  setModalKey: Dispatch<SetStateAction<"ADD" | "EDIT">>;
}

function ButtonAddTransactions({ setModalKey }: IProps) {
  const setModalOpen = useModalWindow((state) => state.setModalToggle);

  const onAddTransactions = () => {
    setModalOpen(TRANSACTION_KEY);
    setModalKey("ADD")
  };

  return (
    <Button type="button" onClick={onAddTransactions} aria-label="add-transaction">
      <FontAwesomeIcon icon={faPlus} size="xl" color="white" />
    </Button>
  );
}

export default ButtonAddTransactions;
