import { useState, useEffect } from "react";
import Card from "../UI/Card";
import ProductCard from "./ProductCard";
import styles from "./AvailableProducts.module.css";
import SortItem from "./SortItem";
import PRODUCTS_DATA from "../../store/ProductsData";

const AvailableProducts = () => {
  const [productsToshow, setProductsToShow] = useState(PRODUCTS_DATA);

  const handleSorting = (e) => {
    const operationType = e.target.value;
    let sortedArray;

    console.log(operationType);
    switch (operationType) {
      case "az":
        sortedArray = [].concat(productsToshow).sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
        });
        setProductsToShow(sortedArray);
        break;
      case "za":
        sortedArray = [].concat(productsToshow).sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
        });
        setProductsToShow(sortedArray);
        break;
      case "priceIncrease":
        sortedArray = []
          .concat(productsToshow)
          .sort((a, b) => a.price - b.price);
        setProductsToShow(sortedArray);

        break;
      case "priceDecrease":
        sortedArray = []
          .concat(productsToshow)
          .sort((a, b) => b.price - a.price);
        setProductsToShow(sortedArray);
        break;
      default:
        console.log("no choice");
    }
  };

  const handleFilterLogic = (e) => {
    const isTrue = e.target.checked;
    let filteredArray = PRODUCTS_DATA;
    if (isTrue) {
      filteredArray = productsToshow.filter((item) => item.availableAmount > 0);
    }
    setProductsToShow(filteredArray);
  };

  const Products = productsToshow.map((product) => (
    <ProductCard
      data={product}
      key={product.id + Math.random()}
      id={product.id}
    />
  ));

  return (
    <section className={styles.suits}>
      <Card>
        <SortItem onChange={handleSorting} onFilterChange={handleFilterLogic} />
        <div className={styles["products-list"]}>{Products}</div>
      </Card>
    </section>
  );
};

export default AvailableProducts;
