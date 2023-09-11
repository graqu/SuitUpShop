import React, { useContext } from "react";
import styles from "./HeaderCardButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import OrderContext from "../../store/order-context";

const HeaderCardBUtton = (props) => {
  const ctx = useContext(OrderContext);
  const totalNumberOfItems = +ctx.items.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <FontAwesomeIcon icon={faBagShopping} />
      </span>
      <span className={styles.badge}>{totalNumberOfItems}</span>
    </button>
  );
};

export default HeaderCardBUtton;
