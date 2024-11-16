    import { useState } from "react"
    import FormCheckout from "./FormCheckout"
    import { useContext } from "react"
    import { CartContext } from "../../context/CartContext"
    import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"
    import db from "../../db/db.js"
    import { Link } from "react-router-dom"
    import "./checkout.css"

    const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })
    const [idOrder, setIdOrder] = useState(null)
    const { cart, totalPrice, deleteCart } = useContext(CartContext)
    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        const order = {
        buyer: { ...dataForm },
        products: [...cart],
        date: Timestamp.fromDate(new Date()),
        total: totalPrice()
        }
        console.log("Order data:", order);

        // Subir el pedido a Firestore
        uploadOrder(order);
    }

    const uploadOrder = (newOrder) => {
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, newOrder)
        .then((response) => setIdOrder(response.id))
        .catch((error) => console.log(error))
        .finally(() => {
            updateStock()
        })
 
    }

    const updateStock = () => {
        cart.map(({ id, quantity, ...dataProduct }) => {
        const productRef = doc(db, "products", id)
        setDoc(productRef, { ...dataProduct, stock: dataProduct.stock - quantity })
        })
        //una vez finalizada la actualizacion de stock, borramos el carrito
        deleteCart()
    }


    return (
        <div className="orderConfirmationContainer">
            {
                idOrder === null ? (
                    <FormCheckout
                        dataForm={dataForm}
                        handleChangeInput={handleChangeInput}
                        handleSubmitForm={handleSubmitForm}
                    />
                ) : (
                    <div className="orderSuccessMessage">
                        <h2 className="successTitle">¡Su orden se subió correctamente! 😁</h2>
                        <p className="orderTrackingMessage">Por favor, guarde su número de seguimiento: <strong>{idOrder}</strong></p>
                        <Link to="/" className="backToHomeButton">Volver al inicio</Link>
                    </div>
                )
            }
        </div>
    );
}
export default Checkout