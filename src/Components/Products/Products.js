import AvailableProducts from "./AvailableProducts";
import ProductsSummary from "./ProductsSummary";

const Products = () => {
  return (
    <>
      <ProductsSummary />
      <main>
        <AvailableProducts />
      </main>
    </>
  );
};

export default Products;
