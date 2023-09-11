import { useContext } from "react";
import OrderContext from "../../store/order-context";
import styles from "./CurrencySelector.module.css";

const CurrencySelector = (props) => {
  const ctx = useContext(OrderContext);

  const handleNewCurrency = (e) => {
    const newCurrency = e.target.value;
    ctx.changeCurrency(newCurrency);
  };

  return (
    <div className={styles.selector}>
      <select name="currency" id="currency-select" onChange={handleNewCurrency}>
        <option value="PLN" code="0">
          zł
        </option>
        <option value="EUR" code="0">
          €
        </option>
        <option value="USD" code="0">
          $
        </option>
      </select>
    </div>
  );
};

export default CurrencySelector;
