import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Axios from 'axios'
import Header from '../components/Header'


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
                    <div className={styles.item__container} key={item.id}>
                        <Image className='item__image' src={item.image} width={200} height={200} layout="responsive" alt=''></Image>
                        <h2>{item.title}</h2>
                    </div>
                ))}
            </div>

        </>
    )
}
