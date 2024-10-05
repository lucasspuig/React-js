import Cart from "../assets/carrito.png"



const CartWidget= () => {


    return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ fontSize: '20px', fontWeight: 'bold', marginRight: '5px' }}>1</p>
        <img src={Cart} width={60} height={70} alt=""  />
    </div>
    )
}

export default CartWidget