import Modal from "../Layout/Modal";
import styles from "./ProductDescription.module.css";
import legenDary from "../../assets/legen-dary-grace.jpg";
import useCurrency from "../../hooks/use-currency";
import AddRemoveButton from "../Cart/AddRemoveButton";
import { createContext, useContext } from "react";
import OrderContext from "../../store/order-context";
import AddToCartButton from "../Layout/AddToCartButton";

const ProductDescription = (props) => {
  const ctx = useContext(OrderContext);
  const productData = {
    id: "a6",
    name: "Legen-dary grace",
    picture: legenDary,
    price: 5700,
    availableAmount: 1,
    description: ` Legendary in every stitch, just like Barney Stinson. This suit, inspired by the iconic 'How I Met Your Mother' character, radiates confidence and charm, making every occasion truly legendary.`
  };

  const price = useCurrency(productData.price);
  let elementOnCartAmount;

  if (ctx.items.some((product) => product.id === productData.id)) {
    elementOnCartAmount = ctx.items.find(
      (product) => product.id === productData.id
    ).amount;
  }

  const addHandler = () => {
    const objectToAdd = {
      id: productData.id,
      name: productData.name,
      picture: productData.picture,
      price: productData.price,
      amount: 1
    };
    ctx.addItem(objectToAdd);
  };
  const removeHandler = () => {
    ctx.removeItem(productData.id);
  };

  return (
    <Modal>
      <div className={styles["product-description"]}>
        <h2>{productData.name}</h2>
        <p>article number: {productData.id}</p>
        <div className={styles.image}>
          <img src={productData.picture} alt={productData.name} />
        </div>
        <p>{productData.description}</p>
        <h3>{price}</h3>
        <p> On your cart: </p>
        {!ctx.items.some((product) => product.id === productData.id) && (
          <AddToCartButton onClick={addHandler} />
        )}
        {ctx.items.some((product) => product.id === productData.id) && (
          <AddRemoveButton onAdd={addHandler} onRemove={removeHandler}>
            {elementOnCartAmount}
          </AddRemoveButton>
        )}
        <p>availibility:</p>
        <p>{productData.availableAmount}</p>
      </div>
    </Modal>
  );
};

export default ProductDescription;
