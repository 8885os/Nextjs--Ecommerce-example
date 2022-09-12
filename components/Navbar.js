import Image from 'next/image';
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { useContext } from 'react';
import CartContext from '../Context/CartContext';

const Navbar = () => {

    const { items } = useContext(CartContext)

    return (
        <nav className={styles.navbar__top}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/men's-clothing">
                <a>Men&apos;s Clothes</a>
            </Link>
            <Link href="/women's-clothing">
                <a>Women&apos;s Clothes</a>
            </Link>
            <Link href="/jewelery">
                <a>Jewelery</a>
            </Link>
            <Link href="/electronics">
                <a>Electronics</a>
            </Link>
            <div className='header__basket'>
                <Link href='/checkout' >
                    <div>
                        <BsFillBasket2Fill fontSize={30} />
                    </div>
                </Link>
                <span>{items.length}</span>

            </div>
        </nav>
    );
}

export default Navbar;