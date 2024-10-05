import CartWidget from "./CartWidget"
import "./navbar.css"
import imgLogo from "../assets/logonike.png"

const Navbar = () => {

    return (
    <nav className="navbar">
        <img src={imgLogo} width={100} height={95} alt="" className="logoNike"/>
        <div className="barraNavegacion">
            <ul>
                <li>Inicio</li>
                <li>Tienda</li>
                <li>Novedades</li>
            </ul>
            
        
        </div>
        <CartWidget />
    </nav>
)
}

export default Navbar