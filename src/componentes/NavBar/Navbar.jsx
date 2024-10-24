import CartWidget from "./CartWidget"
import "./navbar.css"
import imgLogo from "../../assets/logonike.png"
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
    <nav className="navbar">
        <Link to="/">
            <img src={imgLogo} width={100} height={95} alt="" className="logoNike"/>
        </Link>
        <div className="barraNavegacion">
            <ul className="categorias">
                <li className="categoria">
                    <Link to="/category/jordan 1" className="cate">Jordan 1 mid</Link>
                </li>
                <li className="categoria">
                    <Link to="/category/jordan retro 5" className="cate">Jordan retro 5</Link>
                </li >
                <li className="categoria">
                    <Link to="/category/Air Jordan 13" className="cate">Air Jordan 13</Link>
                </li>
            </ul>
            
        
        </div>
        <CartWidget />
    </nav>
)
}

export default Navbar