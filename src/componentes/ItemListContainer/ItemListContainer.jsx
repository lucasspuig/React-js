import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import "./itemlistcontainer.css"


const ItemListContainer = ({ saludo }) => {
    const [productos, setproductos ] = useState([])
    
    const {idcategory} = useParams()

    const getProductos = () => {
        const productosRef = collection( db, "producto" )
        getDocs(productosRef)
        .then((dataDb)=>{
            const productosDb = dataDb.docs.map((productoDb)=>{
                return {id: productoDb.id, ...productoDb.data()}
            })
            setproductos(productosDb);
            
        })
    }

    const getProductosByCategory = () => {
        const productosRef = collection (db, "producto")
        const queryCategories = query( productosRef, where("category", "==", idcategory) )
    getDocs(queryCategories)
        .then ((dataDb)=>{
            const productosDb = dataDb.docs.map((productoDb)=>{
                return {id: productoDb.id, ...productoDb.data()}
            })

            setproductos(productosDb)
        })

    }



    useEffect(() => {
        if (idcategory) {
            getProductosByCategory()
        }else{
            getProductos()
        }
    }, [idcategory])



    return (
        
        <div className="itemlistcontainer">
            <h1 className="tituloprincipal">{saludo}</h1>
                <ItemList productos={productos}/>
        </div>
    )
    }
    
    export default ItemListContainer