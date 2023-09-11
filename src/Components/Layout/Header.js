import React from "react";
import styles from "./Header.module.css";
import CurrencySelector from "./CurrencySelector";
import suitPicture from "../../assets/suit.jpg";
import HeaderCardBUtton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>SuitUp</h1>
        <div className={styles["icon-box"]}>
          <HeaderCardBUtton onClick={props.onOpenCart} />
          <CurrencySelector />
        </div>
      </header>
      <div className={styles["main-image"]}>
        <img src={suitPicture} alt="table full of meals" />
      </div>
    </>
  );
};

export default Header;
