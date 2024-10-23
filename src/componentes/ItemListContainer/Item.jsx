

const Item = ({producto}) => {
    return (
        <div className="item">
            <img src={producto.image} alt=""  className="card-img-top"/>
            <h2 className="card-title">{producto.name}</h2>
            <p className="card-text">Precio: ${producto.price}</p>
        </div>
    )
}

export default Item