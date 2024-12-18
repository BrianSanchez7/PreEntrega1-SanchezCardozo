import "./itemdetail.css"

const ItemDetail = ({ product }) => {

  const formatedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumSignificantDigits: 3,
});

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
      </div>
    </div>
    </div>
  )
}
export default ItemDetail