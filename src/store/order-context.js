import { createContext } from "react";

const OrderContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  currency: {
    currency: "EUR",
    plnCourse: 1
  }
});

export default OrderContext;
