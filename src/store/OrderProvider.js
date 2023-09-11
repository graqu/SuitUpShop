import { useCallback, useEffect, useReducer, useState } from "react";
import OrderContext from "./order-context";

const orderReducerHandler = (state, action) => {
  let newItemsArray = state.itemsOnCart;
  let newTotalAmount = state.totalAmount;

  if (action.type === "ADD") {
    if (state.itemsOnCart.some((item) => item.id === action.item.id)) {
      const elementToUpdate = state.itemsOnCart.find(
        (element) => element.id === action.item.id
      );
      elementToUpdate.amount += action.item.amount;
    } else {
      newItemsArray = state.itemsOnCart.concat(action.item);
    }
    newTotalAmount = state.totalAmount + action.item.price * action.item.amount;
  } else if (action.type === "REMOVE") {
    const [elementToRemove] = state.itemsOnCart.filter(
      (element) => element.id === action.id
    );
    if (action.amount < elementToRemove.amount) {
      elementToRemove.amount -= action.amount;
    } else {
      newItemsArray = state.itemsOnCart.filter(
        (element) => element.id !== action.id
      );
    }
    newTotalAmount = state.totalAmount - action.amount * elementToRemove.price;
  }
  return {
    itemsOnCart: newItemsArray,
    totalAmount: newTotalAmount
  };
};

const OrderProvider = (props) => {
  const [orderStatus, dispatchOrder] = useReducer(orderReducerHandler, {
    itemsOnCart: [],
    totalAmount: 0
  });
  const [currencyCode, setCurrencyCode] = useState(
    /// info (EUR: 7, Dolar: 1)
    null
  );
  const [currency, setCurrency] = useState({ currency: "PLN", plnCourse: 1 });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const addItemFn = (item) => {
    const newObject = { ...item };
    dispatchOrder({ type: "ADD", item: newObject });
  };
  const removeDataFn = (id) => {
    dispatchOrder({ type: "REMOVE", id: id, amount: 1 });
  };

  const fetchCurrencyData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://api.nbp.pl/api/exchangerates/tables/A/?format=json"
      );

      const data = await response.json();
      let plnCourse = 1;
      if (currencyCode !== null) {
        plnCourse = data[0].rates[currencyCode].mid;
      }
      setCurrency((prevState) => ({ ...prevState, plnCourse: plnCourse }));
    } catch (error) {}
    setIsLoading(false);
  }, [currencyCode]);

  const changeCurrency = (currency) => {
    switch (currency) {
      case "EUR":
        setCurrencyCode(7);

        break;
      case "PLN":
        setCurrencyCode(null);
        break;
      case "USD":
        setCurrencyCode(1);
        break;
      default:
        console.log("no currency on list");
    }
    setCurrency((prevState) => ({ ...prevState, currency: currency }));
  };

  useEffect(() => {
    fetchCurrencyData();
  }, [fetchCurrencyData]);

  const cartContext = {
    items: orderStatus.itemsOnCart,
    totalAmount: orderStatus.totalAmount,
    addItem: addItemFn,
    removeItem: removeDataFn,
    currency: currency,
    changeCurrency,
    isLoading
  };

  return (
    <OrderContext.Provider value={cartContext}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
