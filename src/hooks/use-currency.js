import { useContext } from "react";
import OrderContext from "../store/order-context";

const useCurrency = (value = 0) => {
  const ctx = useContext(OrderContext);
  let formatting;

  if (ctx.currency.currency === "USD") {
    formatting = "EN-IN";
  } else {
    formatting = "PL";
  }

  const currencyData = {
    format: formatting,
    currency: ctx.currency.currency,
    plnCourse: ctx.currency.plnCourse
  };
  const baseValue = parseFloat(value) / currencyData.plnCourse;

  const newValue = new Intl.NumberFormat(currencyData.format, {
    style: "currency",
    currency: currencyData.currency
  }).format(baseValue);

  return newValue;
};

export default useCurrency;
