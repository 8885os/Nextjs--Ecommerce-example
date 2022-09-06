import styles from '../styles/Home.module.css'
import Image from 'next/image'

export const getStaticProps = async () => {
    const res = await fetch("https://fakestoreapi.com/products/category/electronics")
    const data = await res.json()
    return {
        props: { items: data }
    }

}

const Electronics = ({ items }) => {
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

export default Electronics;