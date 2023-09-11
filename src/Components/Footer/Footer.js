import styles from "./Footer.module.css";
import FooterInfo from "./FooterInfo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FooterInfo />
      <div>Copyright © 2023 | Jacek Wiącek</div>
    </footer>
  );
};

export default Footer;
