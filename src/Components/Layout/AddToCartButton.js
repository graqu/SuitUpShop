import Button from "../UI/Button";
import styles from "./AddToCartButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const AddToCartButton = (props) => {
  return (
    <Button className={styles.button} onClick={props.onClick}>
      <FontAwesomeIcon icon={faCartPlus} />
    </Button>
  );
};

export default AddToCartButton;
