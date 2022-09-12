import { createContext, useState } from "react";

const CartContext = createContext()

export function CartProvider({ children }) {

    const [items, setItems] = useState([])

    const addToCart = (title, price, image, quantity) => {
        setItems((prev) => [...prev, { title, price, image, quantity }])
    }

    const deleteFromCart = (title) => {
        setItems(items.filter((item) => item.title !== title))
    }

    const minusQuantity = (title, val) => {
        const newState = items.map(obj => {
            if (obj.title === title) {
                return { ...obj, quantity: val - 1 }
            }
            return obj;
        })

        setItems(newState)
    }

    const addQuantity = (title, val) => {
        const newState = items.map(obj => {
            if (obj.title === title) {
                return { ...obj, quantity: val + 1 }
            }
            return obj;
        })

        setItems(newState)
    }
    return (
        <CartContext.Provider value={{ items, addToCart, deleteFromCart, addQuantity, minusQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext