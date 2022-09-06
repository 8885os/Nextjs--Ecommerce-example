import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Home.module.css'


const Navbar = () => {
    return (
        <nav className={styles.navbar__top}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/mens">
                <a>Men&apos;s Clothes</a>
            </Link>
            <Link href="/womens">
                <a>Women&apos;s Clothes</a>
            </Link>
            <Link href="/jewelery">
                <a>Jewelery</a>
            </Link>
            <Link href="/electronics">
                <a>Electronics</a>
            </Link>
        </nav>
    );
}

export default Navbar;