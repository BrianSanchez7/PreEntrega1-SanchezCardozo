import Item from "./Item"


const ItemList = ({ products }) => (
    <div className="itemlist">
        {products.map((product) => (
            <Item product={product} key={product.id}/>
        ))}
    </div>
)

export default ItemList