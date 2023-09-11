import { useContext } from "react";
import useCurrency from "../../hooks/use-currency";
import OrderContext from "../../store/order-context";
import Modal from "../Layout/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  const ctx = useContext(OrderContext);
  const totalAmount = useCurrency(ctx.totalAmount);
  const cartItems = ctx.items.map((item) => (
    <CartItem
      key={item.id + Math.random()}
      id={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      picture={item.picture}
    />
  ));

  return (
    <Modal onClick={props.onCloseFn}>
      <h2>YOUR CART</h2>
      {ctx.items.length === 0 && (
        <p className={styles["no-items"]}>
          No products are in your cart. Let's choose something.
        </p>
      )}
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount </span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onCloseFn}>
          close
        </button>
        <button
          className={styles.button}
          onClick={() => {
            console.log(ctx);
          }}
        >
          Order
        </button>
      </div>
    </Modal>
  );
}

export default Cart;
