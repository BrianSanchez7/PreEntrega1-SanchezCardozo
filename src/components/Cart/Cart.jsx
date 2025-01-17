import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

    //Early Return
    if(cart.length === 0){
        return(
            <div>
                <h2>El carrito está vacio</h2>
                <Link to ="/">Volver al Inicio</Link>
            </div>
        )
    }

  return (
    <div>
        <ul>
        {
                cart.map((productCart) => (
                <li key={productCart.id}>
                    <p>{productCart.name}</p>
                    <img src={productCart.image} width={150} alt="" />
                    <p>Cantidad: {productCart.quantity}</p>
                    <p>Precio Unitario: {productCart.price}</p>
                    <button onClick={() => deleteProductById(productCart.id)}>Eliminar Elemento</button>
                </li>
            ))
        }
        </ul>
        <h3>Precio Total: {totalPrice()}</h3>
        <button onClick={deleteCart}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart