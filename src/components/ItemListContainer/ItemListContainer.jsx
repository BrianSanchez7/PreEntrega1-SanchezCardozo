import "./itemlistcontainer.css"

const ItemListContainer = ({ saludo }) => {
  return (
    <div className="itemlist-container">
        <h1>{ saludo }</h1>
    </div>
  )
}

export default ItemListContainer