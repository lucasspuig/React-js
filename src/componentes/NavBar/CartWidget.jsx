import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import "./navbar.css";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    const quantity = totalQuantity();

    return (
        <Link to="/cart"  className="cartwidget">
            <FaShoppingCart  className={quantity > 0 ? "icon-cartwidget" : "empty-cartwidget"} />
            <p style={{ fontSize: '15px', fontWeight: '900', marginLeft: '5px' }}>{ quantity >= 1 && quantity }</p>
        </Link>
    );
}

export default CartWidget;
