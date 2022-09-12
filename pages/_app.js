import Layout from '../components/Layout'
import '../styles/globals.css'
import { createContext, useContext } from 'react';
import { CartProvider } from '../Context/CartContext';

const AppContext = createContext();

function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </CartProvider>
    )
}

export default MyApp
