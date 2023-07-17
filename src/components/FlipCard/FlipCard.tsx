"use client"

import { useState } from "react";
import { Card, CardBack, CardFront, InnerCard } from "./FlipCard.styled";
import TransactionForm from "../TransactionForm/TransactionForm";


export default function FlipCard ()  {
    const [isIncome, setIsIncome] = useState(false);
  
    return (
      <Card>
        <InnerCard $isFlipped={isIncome}>
          <CardFront>
            <TransactionForm setIsIncome={setIsIncome} isIncome={isIncome} />
          </CardFront>
  
          <CardBack>
            <TransactionForm setIsIncome={setIsIncome} isIncome={isIncome} />
          </CardBack>
        </InnerCard>
      </Card>
    );
  };
  
   