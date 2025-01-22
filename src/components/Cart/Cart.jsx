import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";
import "./cart.css";

const Cart = () => {
  const { cart, totalPrice, deleteProductById, deleteCart } =
    useContext(CartContext);

    const formatedPrice = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumSignificantDigits: 3,
    })

  //Early Return en caso de no tener items en el carrito
  if (cart.length === 0) {
    return (
      <div className="empty-cart-container">
        <h2>El carrito está vacio 🙁</h2>
        <Link to="/" className="button-detail">Volver al Inicio</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <ul>
        {cart.map((productCart) => (
          <div className="cart-detail" key={productCart.id}>
              <div className="cart-item">
                <img src={productCart.image} width={150} alt="" />
                <p>{productCart.name}</p>
                <p>Cantidad: {productCart.quantity}</p>
                <p>Precio Unitario: {formatedPrice.format(productCart.price)}</p>
                <button
                  className="button-delete"
                  onClick={() => deleteProductById(productCart.id)}
                >
                  <MdOutlineDeleteForever className="trash-icon" />
                </button>
              </div>
          </div>
        ))}
      </ul>
      <div className="finish-buy-container">
        <h2>Precio Total: {totalPrice()}</h2>
        <div>
        <Link to ="/checkout" className="button-cart finish">Finalizar Compra</Link>
        <button className="button-cart delete" onClick={deleteCart}>
          Vaciar Carrito
        </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
