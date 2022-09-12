import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

const Header = () => {

    return (
        <div className="header__div">
            <div className="logo-title">
                <Image width={200} height={120} src="/shopping.png" alt=''></Image>
                <h1>SuperShopper</h1>
            </div>
            <Navbar />
        </div>
    );
}

export default Header;