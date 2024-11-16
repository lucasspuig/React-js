import { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"

const ItemDetailContainer = () => {
    const [producto, setProducto]= useState({})
    const { idProducto } = useParams()

    const getProductById = () => {
        const docRef = doc( db, "producto", idProducto )
        getDoc(docRef)
        .then((dataDb)=> {
            const productoDb = { id: dataDb.id, ...dataDb.data() }
    
            setProducto(productoDb)
        })
    }
    
    useEffect( ()=> {
        getProductById()
    }, [idProducto] )

    return (
        <ItemDetail producto={producto} />
    )
}

export default ItemDetailContainer