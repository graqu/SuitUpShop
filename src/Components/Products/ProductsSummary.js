import classes from "./ProductsSummary.module.css";

const ProductsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Explore a World of Timeless Elegance</h2>
      <p>
        Elevate your wardrobe with our meticulously curated collection of finely
        crafted suits, tailored to perfection for discerning individuals like
        you.
      </p>
      <br />
      <p>
        <span className={classes.importantInfo}>Remember!</span> All Suits are
        tailor made - so don't care about size, after order, we will contact
        with You! Avalibility depends on our premium-materials we have in stock.
        If something not available - contact with us to ask for details.
      </p>
    </section>
  );
};

export default ProductsSummary;
