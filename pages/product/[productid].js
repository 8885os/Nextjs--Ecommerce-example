import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from '../../styles/Item.module.css'
import Image from "next/image";
import ProductPage from "../../components/ProductPage";

const Items = () => {

    const router = useRouter();
    const { productid } = router.query;

    const [product, setproduct] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(() => {

        axios.get(`https://fakestoreapi.com/products/${productid}`).then((res) => {
            setproduct(res.data)
            setLoading(false)

        })

    }, [loading])

    if (loading) {
        return (
            <div className="spinner__container">
                <div className="loading__spinner">
                </div>
            </div>
        )
    }

    else if (product.length === 0) {
        return (
            <h1>Product Not Found.</h1>
        )
    }

    return (
        <div className={styles.container__center}>
            <ProductPage product={product} />
        </div>
    );
}

export default Items;