import "./itemdetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const ItemDetail = ({ product }) => {
  //Se formatea precio a pesos argentinos
  const formatedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumSignificantDigits: 3,    
});

//Estado para mostrar o no el elemento "ItemCount"
const [showItemCount, setShowItemCount] = useState(true);
const { addProduct } = useContext(CartContext)

const addProductInCart = (count) => {
  //Producto a añadir al carrito
  const productCart = { ...product, quantity: count }

  addProduct(productCart)

  //Cambiamos el estado para dejar de mostrar ItemCount
  setShowItemCount(false)
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
        {
          showItemCount === true ? (
            <ItemCount stock={product.stock} addProductInCart={addProductInCart}/>) :
            (
              <Link className="button-detail" to="/cart"> Terminar mi compra</Link>
            )
          
        }
        
      </div>
    </div>
    </div>
  )
}
export default ItemDetail