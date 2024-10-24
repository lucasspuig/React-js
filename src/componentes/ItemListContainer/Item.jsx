import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return (
        <Link to={"/detail/" + producto.id} className="item">
            <img src={producto.image} alt=""  className="card-img-top"/>
            <h2 className="card-title">{producto.name}</h2>
            <p className="card-text">Precio: ${producto.price}</p>
        
        <Link to={"/detail/" + producto.id} className="botonDetalle">Ver detalle</Link>
        </Link>
    )
}

export default Item