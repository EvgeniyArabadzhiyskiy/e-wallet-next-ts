"use client";

import {
  BankTableList,
  CurrencyBox,
  TextTitle,
  CurrencyVektor,
  CurrencyList,
} from "./Currency.styled";
import axios from "axios";
import { useEffect, useState } from "react";
import CurrencyListItem from "./CurrencyListItem";

const getApiMono = async () => {
  const res = await axios.get("https://api.monobank.ua/bank/currency");

  const currency = res.data.filter((item: any) => {
    const { currencyCodeA, currencyCodeB } = item;
    const USDUAH = currencyCodeA === 840 && currencyCodeB === 980;
    const EURUAH = currencyCodeA === 978 && currencyCodeB === 980;

    if (USDUAH || EURUAH) {
      return item;
    }
  });

  const currentDate = Date.now();

  localStorage.setItem("getMono", JSON.stringify(currency));
  localStorage.setItem("date", JSON.stringify(currentDate));

  return currency;
};

const Currency = () => {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedApiDate = localStorage.getItem("date");
    const savedApiMono = localStorage.getItem("getMono");

    (async () => {
      if (savedApiMono && savedApiDate) {
        const parsedApiMono = JSON.parse(savedApiMono);
        const parsedApiDate: number = JSON.parse(savedApiDate);

        const currentDate = Date.now();

        const isUpdateApiMono = currentDate - parsedApiDate >= 3600000;

        if (isUpdateApiMono) {
          getApiMono();
        }

        setCurrencies(parsedApiMono);
        return;
      }

      const data = await getApiMono();
      setCurrencies(data);
    })();
  }, []);

  return (
    <CurrencyBox>
      <BankTableList>
        <TextTitle>Currency</TextTitle>
        <TextTitle>Purchase</TextTitle>
        <TextTitle>Sale</TextTitle>
      </BankTableList>

      <CurrencyList>
        {currencies.length !== 0 ? (
          <CurrencyListItem currencies={currencies} />
        ) : (
          <h1>Loading...</h1>
        )}
      </CurrencyList>

      <CurrencyVektor />
    </CurrencyBox>
  );
};

export default Currency;
