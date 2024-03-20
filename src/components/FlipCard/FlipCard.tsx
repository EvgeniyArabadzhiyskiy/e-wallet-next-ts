"use client";

import { useState } from "react";
import { Card, CardBack, CardFront, InnerCard } from "./FlipCard.styled";

import CreateTransactionForm from "../CreateTransactionForm";
import EditTransactionForm from "../EditTransactionForm";

interface IProps {
  modalKey: string;
  editId: string;
}

function FlipCard({ modalKey, editId }: IProps) {
  const [isIncome, setIsIncome] = useState<boolean>(false);

  const FormComponent =
    modalKey === "ADD" ? CreateTransactionForm : EditTransactionForm;

  return (
    <Card>
      <InnerCard $isFlipped={isIncome}>
        <CardFront>
          <FormComponent
            setIsIncome={setIsIncome}
            isIncome={isIncome}
            modalKey={modalKey}
            editId={editId}
          />
        </CardFront>

        <CardBack>
          <FormComponent
            setIsIncome={setIsIncome}
            isIncome={isIncome}
            modalKey={modalKey}
            editId={editId}
          />
        </CardBack>
      </InnerCard>
    </Card>
  );
}
export default FlipCard;
