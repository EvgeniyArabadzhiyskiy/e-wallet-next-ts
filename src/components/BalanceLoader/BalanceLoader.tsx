"use client";

import { Wrapper, Title, Text, Loader } from "./BalanceLoader.styled";

function BalanceLoader() {
  const placeholderBalance = -87710.0;
  return (
    <Wrapper>
      <Title>Your balance</Title>
      <Text>
        <Loader>{placeholderBalance.toFixed(2)}</Loader>
      </Text>
    </Wrapper>
  );
}

export default BalanceLoader;
