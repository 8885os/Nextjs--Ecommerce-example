import React, { useEffect, useState } from 'react'
import styles from '../styles/Item.module.css'
import Image from "next/image"
import { useContext } from 'react'
import CartContext from '../Context/CartContext'
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go'

const ProductPage = ({ product }) => {

    const { addToCart } = useContext(CartContext)

    const [quantity, setQuantity] = useState(1)
    return (
        <div className={styles.item__container}>
            <div className={styles.item__image}>
                <Image width={300} height={300} src={product.image} alt={product.title} />
            </div>
            <div className={styles.item__title}>
                <h1>{product.title}</h1>
                <h3>£{(Math.round(product.price * 100) / 100).toFixed(2)}</h3>
            </div>

            <p>{product.description}</p>
            <h5>Status: In Stock</h5>
            <div className={styles.quantity__div}>
                <h3 className={styles.quantity} >{quantity}</h3>
                <div className={styles.quantity__arrows}>
                    <button className={styles.cursor__button} onClick={() => setQuantity((prev) => prev + 1)}><GoTriangleUp /></button>
                    <button className={styles.cursor__button} onClick={() => quantity > 0 ? setQuantity((prev) => prev - 1) : setQuantity(quantity)}><GoTriangleDown /></button>
                </div>
            </div>
            <button className={styles.basket__button} onClick={() => addToCart(product.title, product.price, product.image, quantity)} >Add To Basket</button>
        </div>
    )
}

export default ProductPage