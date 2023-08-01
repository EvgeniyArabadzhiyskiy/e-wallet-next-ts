"use client";

import {
  PrivatTableList,
  CurrencyBox,
  TextTitle,
  CurrencyVektor,
  CurrencyList,
} from "./Currency.styled";
// import grafSvg from "../../images/currencyVektor.svg";
import axios from "axios";
// import { toast } from "react-toastify";
import { use, useEffect, useState } from "react";
import CurrencyListItem from "./CurrencyListItem";

//   import CurrencyListItem from './CurrencyListItem';

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

// const getApiMono = async () => {
//   const res = await axios
//     .get('https://api.monobank.ua/bank/currency')
//     .then(res => {
//       const date = new Date();
//       localStorage.setItem('getMono', JSON.stringify(res.data));
//       localStorage.setItem('date', JSON.stringify(+date));
//       return res;
//     })
//     .catch(error => error);
//   return res.data;
// };

const Currency = () => {
  const [arrow, setArrow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedApiDate = localStorage.getItem('date');
    const savedApiMono = localStorage.getItem("getMono");

    (async () => {
      if (savedApiMono && savedApiDate) {
        const parsedApiMono = JSON.parse(savedApiMono);
        const parsedApiDate = JSON.parse(savedApiDate) as number;

        const currentDate = Date.now();

        const isUpdateApiMono = (currentDate - parsedApiDate) >= 3600000

        if (isUpdateApiMono) {
          getApiMono()
        }

        setArrow(parsedApiMono);
        return
      }
      
      const data = await getApiMono();
      setArrow(data);
      
    })();
  }, []);

  // useEffect(() => {
  //   const getCurrency = async () => {
  //     setLoading(true);

  //     const savedApiMono = localStorage.getItem('getMono');
  //     const parsedApiMono = JSON.parse(savedApiMono);

  //     const savedApiDate = localStorage.getItem('date');
  //     const parsedApiDate = JSON.parse(savedApiDate);

  //     const date = new Date();

  //     const update = (+date - parsedApiDate) >= 3600000;

  //     if (!parsedApiDate) {
  //       localStorage.setItem('date', JSON.stringify(+date));
  //     }

  //     if (update) {
  //       setLoading(true);
  //       await getApiMono();
  //     }

  //     if (parsedApiMono) {
  //       const arrow = parsedApiMono.slice(0, 2);
  //       setArrow(arrow);
  //       return;
  //     }

  //     try {
  //       const data = await getApiMono();
  //       const newArrow = data.slice(0, 2);
  //       setArrow(newArrow);
  //     } catch (error) {
  //       console.log("getCurrency  error:", error);
  //       // toast.error('Bank request error');
  //     }
  //   };

  //   getCurrency();
  //   setLoading(false);
  // }, []);

  return (
    <CurrencyBox>
      <PrivatTableList>
        <TextTitle>Currency</TextTitle>
        <TextTitle>Purchase</TextTitle>
        <TextTitle>Sale</TextTitle>
      </PrivatTableList>

      <CurrencyList>
        {true ? <CurrencyListItem arrow={arrow} /> : <h1>Load Spiner...</h1>}
      </CurrencyList>

      <CurrencyVektor />
    </CurrencyBox>
  );
};

export default Currency;
