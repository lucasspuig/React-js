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
    <div>
        <button onClick={handelClickRest}>-</button>
        <p>{count}</p>
        <button onClick={handelClickAdd }>+</button>


        <button onClick={ ()=> addproducto(count) }>Agregar al carrito</button>
    </div>
)
}

export default ItemCount