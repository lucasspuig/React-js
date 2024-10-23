import { useState, useEffect } from "react";
import { getproductos } from "../../data/data.js"; 
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import "./itemlistcontainer.css"


const ItemListContainer = ({ saludo }) => {
    const [productos, setproductos ] = useState([])
    const {idcategory} = useParams()


    useEffect(() => {
        getproductos()
        .then((data)=>{
            if (idcategory) {
                //filtramos la data por esa cateforia
                const filterProductos = data.filter((producto)=> producto.category === idcategory)
                setproductos(filterProductos)
            }else{

                setproductos(data); 
            }   
        })
        .catch((error)=>{
            console.error(error);
        })
        .finally(()=>{
            console.log("finalizo la promesa");
            
        })
    }, [idcategory])



    return (
        
        <div className="itemlistcontainer">
            <h1>{saludo}</h1>
            <ItemList productos={productos}/>
        </div>
    )
    }
    
    export default ItemListContainer