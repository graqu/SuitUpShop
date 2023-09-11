import useCurrency from "../../hooks/use-currency";
import classes from "./CartItem.module.css";
import AddRemoveButton from "./AddRemoveButton";
import MediaQuery from "react-responsive";
import { useContext } from "react";
import OrderContext from "../../store/order-context";

const CartItem = (props) => {
  const context = useContext(OrderContext);
  const itemPrice = useCurrency(props.price);

  const handleAddProduct = () => {
    const objectToAdd = {
      id: props.id,
      name: props.name,
      picture: props.picture,
      price: props.price,
      amount: 1
    };
    context.addItem(objectToAdd);
  };
  const handleRemoveProduct = () => {
    context.removeItem(props.id);
  };

  return (
    <li className={classes["cart-item"]}>
      <MediaQuery minWidth={558}>
        <div className={classes.picture}>
          <img src={props.picture} alt={props.name} />
        </div>
      </MediaQuery>
      <div className={classes["text-box"]}>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{itemPrice}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <AddRemoveButton
          onAdd={handleAddProduct}
          onRemove={handleRemoveProduct}
        >
          {props.amount}
        </AddRemoveButton>
      </div>
    </li>
  );
};

export default CartItem;
