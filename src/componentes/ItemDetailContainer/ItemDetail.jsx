import "./itemdetail.css"

const ItemDetail = ({producto}) => {
    return (
        <div className="itemDetail">
            <img src= {producto.image} className="imgdetail" alt="" />
            <div className="boxdetail">
                <h2 className="name">{producto.name}</h2>
                <p className="description">{producto.description}</p>
                <p className="price">Precio: ${producto.price}</p>
                
            </div>
        </div>
    )
}

export default ItemDetail