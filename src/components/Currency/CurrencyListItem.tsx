import { CurrencyItem, Text } from "./Currency.styled";

interface Curenccy {
  currencyCodeA: number;
  currencyCodeB: number;
  data: number;
  rateBuy: number;
  rateSell: number;
}

interface IProps {
  currencies: Curenccy[];
}

function CurrencyListItem({ currencies }: IProps) {
  return (
    <>
      {currencies
        ? currencies.map(({ currencyCodeA, rateBuy, rateSell }) => (
            <CurrencyItem key={currencyCodeA}>
              <Text>{currencyCodeA === 840 ? "USD" : "EUR"}</Text>
              <Text>{Number(rateBuy).toFixed(2)}</Text>
              <Text>{Number(rateSell).toFixed(2)}</Text>
            </CurrencyItem>
          ))
        : null}
    </>
  );
}

export default CurrencyListItem;
