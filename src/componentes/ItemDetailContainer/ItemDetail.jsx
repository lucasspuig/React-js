import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./itemdetail.css"

const ItemDetail = ({producto}) => {
    const[mostrarItemCount,  setMostrarItemcount] = useState(true)
    const { addProductoInCart } = useContext(CartContext)


    const addproducto = (count)=>{
        const productoCart = { ...producto, quantity: count }

        addProductoInCart(productoCart)
        setMostrarItemcount(false)
        
    }


    return (
        <div className="itemDetail">
            <img src= {producto.image} className="imgdetail" alt="" />
            <div className="boxdetail">
                <h2 className="name">{producto.name}</h2>
                <p className="description">{producto.description}</p>
                <p className="price">Precio: ${producto.price}</p>
            {
                    mostrarItemCount === true ? (
                    <ItemCount stock={producto.stock} addproducto={addproducto}/>
                ) : (
                <Link to="/cart"> Terminar mi compra  </Link>
                )
            }
            </div>
        </div>
    )
}

export default ItemDetail