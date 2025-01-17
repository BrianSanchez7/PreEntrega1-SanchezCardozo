import "./itemdetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const ItemDetail = ({ product }) => {

  //Se formatea precio a pesos argentinos
  const formatedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumSignificantDigits: 3,    
});

const { addProduct } = useContext(CartContext)

const AddProductInCart = (count) => {
  //Producto a añadir al carrito
  const productCart = { ...product, quantity: count }

  addProduct(productCart)
}

  return (
    <div className="item-detail-container">
    <div className="item-detail">
        <div className="main-image">
          <img src={product.image} alt="" />
        </div>

      <div>
        <h2 className="title-detail">{product.name}</h2>
        <p className="text-detail">{product.description}</p>
        <p className="text-price">Precio: {formatedPrice.format(product.price)}</p>
        <ItemCount stock={product.stock} AddProductInCart={AddProductInCart}/>
      </div>
    </div>
    </div>
  )
}
export default ItemDetail