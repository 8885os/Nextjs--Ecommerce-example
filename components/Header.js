import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div>
            <div className="logo-title">
                <Image width={300} height={220} src="/shopping.png" alt=''></Image>
                <h1>SuperShopper</h1>
            </div>
            <Navbar />
        </div>
    );
}

export default Header;