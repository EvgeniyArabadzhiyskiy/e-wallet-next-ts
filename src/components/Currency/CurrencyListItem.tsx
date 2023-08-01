import { CurrencyItem, Text } from "./Currency.styled";

interface IProps {
    arrow: any;
}

function CurrencyListItem  ({ arrow }: IProps)  {
  return (
    <>
      {arrow
        ? arrow.map(({ currencyCodeA, rateBuy, rateSell }: any) => (
            <CurrencyItem key={currencyCodeA}>
              <Text>{currencyCodeA === 840 ? 'USD' : 'EUR'}</Text>
              <Text>{Number(rateBuy).toFixed(2)}</Text>
              <Text>{Number(rateSell).toFixed(2)}</Text>
            </CurrencyItem>
          ))
        : null}
    </>
  );
};

export default CurrencyListItem;
