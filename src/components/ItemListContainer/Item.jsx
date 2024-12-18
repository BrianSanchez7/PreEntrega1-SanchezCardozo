import { Link } from "react-router-dom";

const Item = ({ product }) => {

  const formatedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumSignificantDigits: 3,
});


  return (
      <div className="item">
        <img src={product.image} className="img-item" alt={product.name} />
        <p className="item-title">{product.name}</p>
        <p className="item-text">Precio: {formatedPrice.format(product.price)}</p>
        <Link to= {"/item/" + product.id} className="button-detail">Ver Detalles</Link>
      </div>
  );
};

export default Item;
