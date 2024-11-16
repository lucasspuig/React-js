import { useState } from "react"

const ItemCount = ({ stock, addproducto }) => {
const[count, setCount]= useState(1)

    const handelClickRest = ()=> {
        if (count > 1) {
            setCount(count-1)
        }
        
    }

    const handelClickAdd = ()=> {
        if (count < stock) {
            setCount(count+1)
        }
        
    }



    return (
    <div className="numerocantidad">
        <button onClick={handelClickRest}className="menos">-</button>
        <p>{count}</p>
        <button onClick={handelClickAdd }className="mas">+</button>


        <button onClick={ ()=> addproducto(count) }className="agregar">Agregar al carrito</button>
    </div>
)
}

export default ItemCount