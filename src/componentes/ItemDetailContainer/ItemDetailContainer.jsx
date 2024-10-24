import { useState, useEffect } from "react"
import { getproductos } from "../../data/data.js"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"

const ItemDetailContainer = () => {
    const [producto, setProducto]= useState({})
    const { idProducto }= useParams()

useEffect(()=> {
    getproductos()
        .then( (data)=> {
            const findProducto = data.find( (producto)=> producto.id === idProducto )
            setProducto(findProducto)
        })
    }, [idProducto] )

    return (
        <ItemDetail producto={producto} />
    )
}

export default ItemDetailContainer