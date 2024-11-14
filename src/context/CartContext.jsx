import { createContext, useState } from "react";

// creamos un componente llamado CarContext
const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProductoInCart = (newProducto) => {
      //comprobar si el producto nuevo ya esta en el carrito
    const tempCart = [...cart]
    const indexProducto = cart.findIndex( (productoCart)=> productoCart.id === newProducto.id )

    if(indexProducto >= 0){
        //sumar cantidades
        tempCart[indexProducto].quantity = tempCart[indexProducto].quantity + newProducto.quantity

        setCart(tempCart)
    }else{
        //agregar como producto nuevo
        setCart( [ ...cart, newProducto ] )
    }
    }


    //cantidad total de productos
    const totalQuantity = () => {
        const quantity = cart.reduce ( ( total, productoCart ) => total + productoCart.quantity, 0)
        return quantity
    }
    //precio total de la compra
    const totalPrice = () => {
        const price = cart.reduce((total, productoCart) => total + ( productoCart.quantity * productoCart.price ), 0 )
    return price
    }

    const deleteProductoById = (idProducto) => {
        const filterProductos =  cart.filter((productoCart)=> productoCart.id !== idProducto)
        setCart(filterProductos)
    }


    const deleteCart = () => {
        setCart([])
    }




    return(
        <CartContext.Provider value={ {cart, addProductoInCart, totalQuantity, totalPrice, deleteProductoById, deleteCart} }>
            {children}
        </CartContext.Provider>
    )
}

export{CartProvider, CartContext}


