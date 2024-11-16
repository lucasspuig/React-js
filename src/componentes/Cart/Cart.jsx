import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./cart.css";
const Cart = () => {
    const { cart, totalPrice, deleteProductoById, deleteCart } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="emptyCart">
                <h2 className="emptyCartMessage">No hay productos en el carrito 😢</h2>
                <Link to="/" className="backToHome">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="cartContainer">
            <h2 className="cartTitle">Productos en el carrito</h2>
            {
                cart.map((productoCart) => (
                    <div key={productoCart.id} className="cartItem">
                        <img src={productoCart.image} alt={productoCart.name} className="cartItemImage" />
                        <p className="cartItemName">{productoCart.name}</p>
                        <p className="cartItemQuantity">Cantidad: {productoCart.quantity}</p>
                        <p className="cartItemPrice">Precio c/u: ${productoCart.price}</p>
                        <p className="cartItemSubtotal">Precio parcial: ${productoCart.quantity * productoCart.price}</p>
                        <button 
                            onClick={() => deleteProductoById(productoCart.id)} 
                            className="cartItemDeleteButton"
                        >
                            Borrar producto
                        </button>
                    </div>
                ))
            }
            <div className="cartSummary">
                <p className="cartTotalPrice">Precio total: ${totalPrice()}</p>
                <div className="vaciarterminar">
                    <button onClick={deleteCart} className="cartDeleteButton">Vaciar carrito</button>
                    <Link to="/checkout" className="cartCheckoutButton">Terminar mi compra</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
