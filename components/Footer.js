import Link from 'next/link'
import styles from '../styles/Home.module.css'


const Footer = () => {
    return (
        <nav className={styles.navbar__bottom}>
            <Link href="/">
                <a>Terms of Service</a>
            </Link>
            <Link href="/">
                <a>Privacy Policy</a>
            </Link>
        </nav>
    );
}

export default Footer;