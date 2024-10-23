import "./itemdetail.css"

const ItemDetail = ({producto}) => {
    return (
        <div className="itemDetail">
            <img src= {producto.image} width={400} alt="" />
            <div>
                <h2>{producto.name}</h2>
                <p>{producto.description}</p>
                <p>Precio: ${producto.price}</p>
                
            </div>
        </div>
    )
}

export default ItemDetail