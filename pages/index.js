import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Axios from 'axios'
import Header from '../components/Header'
import Item from '../components/Item'


export const getStaticProps = async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    return {
        props: { items: data }
    }

}

export default function Home({ items }) {
    return (
        <>
            <div className={styles.container}>
                {items.map(item => (
                    <Item item={item} />
                ))}
            </div>

        </>
    )
}
