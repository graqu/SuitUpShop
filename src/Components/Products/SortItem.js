import styles from "./SortItem.module.css";

const SortItem = (props) => {
  return (
    <div className={styles.sort}>
      <div>
        <label htmlFor="filter">Show Available only:</label>
        <input
          type="checkbox"
          id="filter"
          name="filter"
          onChange={props.onFilterChange}
        />
      </div>
      <div>
        <label htmlFor="sort">Sort by:</label>
        <select name="sort" id="sort-type-select" onChange={props.onChange}>
          <option value="">--choose option--</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
          <option value="priceIncrease">Price increase</option>
          <option value="priceDecrease">Price Decrease</option>
        </select>
      </div>
    </div>
  );
};

export default SortItem;
