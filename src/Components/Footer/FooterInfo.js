import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './FooterInfo.module.css';

const FooterInfo = () => {
	return (
		<div className={styles['footer-info']}>
			<div className={styles['footer-column']}>
				<h3>SuitUp company</h3>
				<p>Neverland street 6</p>
				<p>00-000 Warsaw</p>
				<p>+48 000 000 000</p>
			</div>
			<div className={styles['footer-column']}>
				<h3>Our social links:</h3>
				<a
					href='https://www.linkedin.com/in/jacekwiacek/'
					rel='noopener noreferrer'
					target='_blank'
					className={styles.icon}
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a
					href='https://github.com/graqu'
					rel='noopener noreferrer'
					target='_blank'
					className={styles.icon}
				>
					<FontAwesomeIcon icon={faSquareGithub} />
				</a>
			</div>
		</div>
	);
};

export default FooterInfo;
