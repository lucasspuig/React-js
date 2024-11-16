import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const{ cart, totalPrice, deleteProductoById, deleteCart } = useContext(CartContext)

    //Early return//retorno temprano
    if (cart.length === 0) {
        return(
            <div>
                <h2>No hay productos en el carrito 😢</h2>
                <Link to="/"> Volver al inicio </Link>
            </div>
        )
        
    }



    return (
    <div>
        <h2>Productos en el carrito</h2>
        {
        cart.map((productoCart)=>(
            <div key={productoCart.id}>
                <img src={productoCart.image} width={200} alt="" />
                <p>{productoCart.name}</p>
                <p>Cantidad: {productoCart.quantity}</p>
                <p>Precio c/u: ${productoCart.price}</p>
                <p>Precio parcial: ${productoCart.quantity * productoCart.price}</p>

                <button onClick={ () => deleteProductoById(productoCart.id)}>Borrar carrito</button>
            </div>
        ))
    }

        <div>
            <p>Precio total: ${totalPrice()}</p>
            <button onClick={deleteCart}>Vaciar carrito</button>
            <Link to= "/checkout">Terminar mi compra</Link>
        </div>
    </div>
    
)
}

export default Cart