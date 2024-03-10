import stl from "./BalanceLoader.module.scss";

function BalanceLoader() {
  const placeholderBalance = -87710.0;
  return (
    <div className={stl.wrapper}>
      <p className={stl.balance__title}>Your balance</p>
      <div className={stl.loading}>{placeholderBalance.toFixed(2)}</div>
    </div>
  );
}

export default BalanceLoader;
