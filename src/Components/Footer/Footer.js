import styles from './Footer.module.css';
import FooterInfo from './FooterInfo';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<FooterInfo />
			<div>
				Copyright © 2023 |{' '}
				<a
					href='https://itjacek.waw.pl'
					rel='noopener noreferrer'
					target='_blank'
					className={styles.link}
				>
					Jacek Wiącek
				</a>
			</div>
		</footer>
	);
};

export default Footer;
