import { useState, useEffect } from "react";
import { getproductos } from "../../data/data.js"; 
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import "./itemlistcontainer.css"


const ItemListContainer = ({ saludo }) => {
    const [productos, setproductos ] = useState([])
    const [loading, setLoading] = useState(true)
    const {idcategory} = useParams()


    useEffect(() => {

        setLoading(true)


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
            setLoading(false)    
        })
    }, [idcategory])



    return (
        
        <div className="itemlistcontainer">
            <h1 className="tituloprincipal">{saludo}</h1>
            {
                loading === true ? (
                    <div>Cargando...</div>
                ) : (
                <ItemList productos={productos}/>
                )
            }
            
        </div>
    )
    }
    
    export default ItemListContainer