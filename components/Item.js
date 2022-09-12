import Link from "next/link"
import styles from '../styles/Home.module.css'
import Image from "next/image"

const Item = ({ item }) => {
    return (
        <Link href={`/product/${item.id}`}>
            <div className={styles.item__container} key={item.id}>
                <Image className='item__image' src={item.image} width={200} height={200} layout="responsive" alt=''></Image>
                <h2>{item.title}</h2>
            </div>
        </Link>
    )
}

export default Item