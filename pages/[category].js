import styles from '../styles/Home.module.css'
import Item from '../components/Item'

export async function getStaticPaths() {
    return {
        paths: [{ params: { category: 'men\'s-clothing' } }, { params: { category: 'women\'s-clothing' } }, { params: { category: 'jewelery' } }, { params: { category: 'electronics' } }],
        fallback: false,
    }
}


export const getStaticProps = async (context) => {
    const category = context.params.category

    const res = await fetch(`https://fakestoreapi.com/products/category/${category.replace('-', ' ')}`)
    const data = await res.json()
    return {
        props: { items: data }
    }
}


const Category = ({ items }) => {
    return (
        <div className={styles.container}>
            {items.map(item => (
                <Item item={item} key={item.id} />
            ))}
        </div>
    );
}

export default Category;