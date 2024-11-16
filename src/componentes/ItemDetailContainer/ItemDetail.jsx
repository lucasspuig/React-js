import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./itemdetail.css"

const ItemDetail = ({producto}) => {
    const[mostrarItemCount,  setMostrarItemcount] = useState(true)
    const { addProductoInCart } = useContext(CartContext)

    const addproducto = (count) => {
        const productoCart = { ...producto, quantity: count }
        addProductoInCart(productoCart)
        setMostrarItemcount(false)
    }

    return (
    <div className="itemDetailContainer">
            <div className="itemDetailImage">
                <img src={producto.image} className="imgdetail" alt={producto.name} />
            </div>
            <div className="itemDetailInfo">
                <h2 className="name">{producto.name}</h2>
                <p className="description">{producto.description}</p>
                <div className="priceagre">
                    <p className="price">Precio: ${producto.price}</p>
                    {
                        mostrarItemCount ? (
                            <ItemCount className="numerocantidad" stock={producto.stock} addproducto={addproducto} />
                        ) : (
                            <Link to="/cart" className="terminarcompra">Terminar mi compra</Link>
                        )
                    }
                </div>
            </div>
    </div>
        
    )
}

export default ItemDetail;


