import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";


export function NavBar(){
    return(
        <nav>
            <div className="navTop">
                <ul>
                    <li>Help</li>
                    <li>Order & Returns</li>
                    <li>Hi, John</li>
                </ul>
            </div>
            <div className="navBottom">
                <div>
                    <h1>ECOMMERCE</h1>
                </div>
                <div className="navLinks">
                    <ul>
                        <li>Categories</li>
                        <li>Sale</li>
                        <li>Clearance</li>
                        <li>New Stock</li>
                        <li>Trending</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><CiSearch size={25}/></li>
                        <li><CiShoppingCart size={25}/></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}