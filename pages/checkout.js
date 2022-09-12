import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import CartContext from "../Context/CartContext";
import styles from '../styles/Item.module.css'
import { MdClose } from 'react-icons/md';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go'


const Checkout = () => {

    const { items, deleteFromCart, addQuantity, minusQuantity } = useContext(CartContext)

    const [total, setTotal] = useState(0)

    useEffect(() => {
        console.log(items);
        items.map(item => {
            setTotal(total + (item.price * item.quantity))
        })
    }, [])

    return (
        <div>
            <h1>Checkout</h1>
            <div className={styles.items}>
                {items.map((item) =>
                (
                    <div className={styles.single}>
                        <Image style={{ minWidth: '100px' }} width={100} height={100} src={item.image} alt={item.title} />
                        <div className={styles.checkout__title}>
                            <h1 className={styles.item__title}>{item.title}</h1>
                            <h3 className={styles.item__price}>£{(Math.round(item.price * 100) / 100).toFixed(2)}</h3>
                            {item.quantity > 1 ? (<h2>{(Math.round((item.price * item.quantity) * 100) / 100).toFixed(2)}</h2>) : (<h3></h3>)}
                        </div>
                        <div className={styles.quantity__div}>
                            <h3 className={styles.quantity} >{item.quantity}</h3>
                            <div className={styles.quantity__arrows}>
                                <button className={styles.cursor__button} onClick={() => addQuantity(item.title, item.quantity)}><GoTriangleUp /></button>
                                <button className={styles.cursor__button} onClick={() => item.quantity > 0 ? minusQuantity(item.title, item.quantity) : ''}><GoTriangleDown /></button>
                            </div>
                        </div>
                        <div onClick={() => deleteFromCart(item.title)} style={{ display: 'flex', marginLeft: 'auto', alignItems: 'center', marginRight: '50%', cursor: 'pointer' }}>
                            <MdClose style={{ fontSize: '30px', color: 'red', display: 'flex' }} />
                        </div>
                    </div>

                ))}
            </div>
            <h1>Total: {(Math.round(total * 100) / 100).toFixed(2)}</h1>
        </div>
    );
}

export default Checkout;