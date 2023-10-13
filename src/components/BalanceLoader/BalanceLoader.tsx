// "use client";

// import { Wrapper, Title, Text, Loader } from "./BalanceLoader.styled";
import stl from "./BalanceLoader.module.scss";

function BalanceLoader() {
  const placeholderBalance = -87710.0;
  return (
    // или styled component BalanceLoader
    // <Wrapper>
    //   <Title>Your balance</Title>
    //   <Loader>{placeholderBalance.toFixed(2)}</Loader>
    // </Wrapper>

    <div className={stl.wrapper}>
      <p className={stl.balance__title}>Your balance</p>
      <div className={stl.loading}>{placeholderBalance.toFixed(2)}</div>
    </div>
  );
}

export default BalanceLoader;
