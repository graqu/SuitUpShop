import React, { useContext, useState } from "react";
import Button from "../UI/Button";
import styles from "./ProductCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faExclamation,
  faBoxOpen
} from "@fortawesome/free-solid-svg-icons";
import OrderContext from "../../store/order-context";
import useCurrency from "../../hooks/use-currency";
import AddToCartButton from "../Layout/AddToCartButton";

const ProductCard = (props) => {
  const ctx = useContext(OrderContext);
  const [maxAmountReached, setmaxAmountReached] = useState(false);
  const item = props.data;

  //zostawić !! - powodowało dziwnego buga
  // const elementIdOnCard =
  //   ctx.items.findIndex((element) => (element.id = item.id)) >= 0;
  //zostawić !! - powodowało dziwnego buga

  const price = useCurrency(props.data.price);

  const addToCardHandler = (item) => {
    //jakiekolwiek wywołanie findIndex tutaj- powoduje ten sam błąd-warunek w if wystarczy !!!
    // if (ctx.items.findIndex((element) => (element.id = item.id)) >= 0) {
    // const amountOnCard =
    //   ctx.items[
    //     ctx.items.findIndex((element) => (element.productId = item.id))
    //   ].amount;
    // amountOnCard >= item.availableAmount - 1 && setmaxAmountReached(true);}
    //jakiekolwiek wywołanie findIndex - powoduje ten sam błąd !!!

    ctx.addItem({ ...item, amount: 1 });
  };

  return (
    <div className={styles["product-card"]}>
      {item.availableAmount === 0 && (
        <div className={styles.unavailable}>
          <div className={styles["stock-icon"]}>
            <FontAwesomeIcon icon={faBoxOpen} />
          </div>
          <p>Currently not available, contact with us to ask for details.</p>
        </div>
      )}
      {maxAmountReached && (
        <div className={styles.unavailable}>
          <p>Available amount reached</p>
        </div>
      )}
      <div className={styles.image}>
        <img src={item.picture} alt={item.name} />
      </div>
      <div className={styles["text-box"]}>
        <h3>{item.name}</h3>
        {ctx.isLoading ? <p>Loading...</p> : <h4>{price}</h4>}
        {item.availableAmount === 0 || maxAmountReached ? (
          ""
        ) : (
          <AddToCartButton onClick={addToCardHandler.bind(null, item)} />
        )}
      </div>
      {(item.availableAmount === 2 || item.availableAmount === 1) && (
        <Button title="last items !" tag="div" className={styles["last-item"]}>
          <FontAwesomeIcon icon={faExclamation} />
        </Button>
      )}
    </div>
  );
};

export default ProductCard;
