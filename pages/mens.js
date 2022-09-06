import styles from '../styles/Home.module.css'
import Image from 'next/image'

export const getStaticProps = async () => {
    const res = await fetch("https://fakestoreapi.com/products/category/men's clothing")
    const data = await res.json()
    return {
        props: { items: data }
    }

}

const Mens = ({ items }) => {
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
    );
}

export default Mens;