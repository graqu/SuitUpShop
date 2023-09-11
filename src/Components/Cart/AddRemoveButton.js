import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import styles from "./AddRemoveButton.module.css";

const AddRemoveButton = (props) => {
  return (
    <div className={styles["add-remove-item"]}>
      <button
        className={`${styles.button} ${styles["button--left"]}`}
        onClick={props.onRemove}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <div className={styles.display}>{props.children}</div>
      <button
        className={`${styles.button} ${styles["button--right"]}`}
        onClick={props.onAdd}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default AddRemoveButton;
