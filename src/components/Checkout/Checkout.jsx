import { useState, useContext } from "react";
import "./checkout.css";
import FormCheckout from "./FormCheckout";
import { CartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore";
import db from "../../db/db.js"
import SuccessCheckout from "./SuccessCheckout.jsx";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null)

  const { cart, totalPrice, deleteCart } = useContext(CartContext)
  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async(event) => {
    event.preventDefault();
    const order = {  
        buyer: {...dataForm}, 
        products: [...cart],
        total: totalPrice(), 
        date: Timestamp.fromDate(new Date ())
    }

    await uploadOrder(order)
    deleteCart()
  };

  const uploadOrder = async(newOrder) => {
    try {
        const ordersRef = collection(db, "orders")
        const response = await addDoc(ordersRef, newOrder)
        setOrderId(response.id)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    orderId ? <SuccessCheckout orderId={orderId}/> :
    <div className="checkout-container">
      <h2>Ingrese los datos para finalizar su compra</h2>
      <FormCheckout 
      dataForm={dataForm}
      handleChangeInput={handleChangeInput}
      handleSubmitForm={handleSubmitForm}/>
    </div>
  );
};

export default Checkout;
