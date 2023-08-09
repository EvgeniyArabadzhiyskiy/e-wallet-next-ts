"use client";

import { useState } from "react";
import { Card, CardBack, CardFront, InnerCard } from "./FlipCard.styled";
import TransactionForm from "../TransactionForm/TransactionForm";

interface IProps {
  modalKey: string;
  editId: string;
}

function FlipCard({ modalKey, editId }: IProps) {
  const [isIncome, setIsIncome] = useState<boolean>(false);

  return (
    <Card>
      <InnerCard $isFlipped={isIncome}>
        <CardFront>
          <TransactionForm
            setIsIncome={setIsIncome}
            isIncome={isIncome}
            modalKey={modalKey}
            editId={editId}
          />
        </CardFront>

        <CardBack>
          <TransactionForm
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
