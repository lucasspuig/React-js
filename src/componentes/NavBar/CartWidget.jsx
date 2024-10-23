import Cart from "../../assets/carrito.png"
import "./navbar.css"


const CartWidget= () => {


    return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={Cart} width={40} height={40}  alt=""  className="imgcart"/>
        <p style={{ fontSize: '15px', fontWeight: '900', marginLeft: '5px' }}>1</p>
        
    </div>
    )
}

export default CartWidget