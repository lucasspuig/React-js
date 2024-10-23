import { useState, useEffect } from "react"
import { getproductos } from "../../data/data.js"
import ItemDetail from "./ItemDetail.jsx"

const ItemDetailContainer = () => {
    const [producto, setProducto]= useState({})

useEffect(()=> {
    getproductos()
        .then( (data)=> {
            const findProducto = data.find( (producto)=> producto.id === "dfe2cc22" )
            setProducto(findProducto)
        })
    }, [] )

    return (
        <ItemDetail producto={producto} />
    )
}

export default ItemDetailContainer