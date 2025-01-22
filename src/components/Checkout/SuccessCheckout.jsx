import "./checkout.css"
import { Link } from 'react-router-dom'

const SuccessCheckout = ({orderId}) => {
  return (
    <div className='success-checkout-container'>
        <h2>
            ¡Gracias por su compra! Conserve su código de seguimiento 😎
        </h2>
        <h3>
            {orderId}
        </h3>
        <Link to="/" className='button-detail'>Volver al Inicio</Link>
    </div>
  )
}

export default SuccessCheckout