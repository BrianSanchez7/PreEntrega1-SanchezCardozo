import { useState } from "react"
import "./itemcount.css"
const ItemCount = ( {stock, AddProductInCart} ) => {
const [count, setCount] = useState(1)

const handleClickRemove = () =>{
    count > 1 && setCount ( count - 1 )
}

const handleClickAdd = () =>{
    count < stock && setCount ( count + 1 )
}

  return (
    <>
    <div className="buttons-grid">
        <button onClick={handleClickRemove} className="buttons">-</button>
        <p>{count}</p>
        <button onClick={handleClickAdd} className="buttons">+</button>
    </div>
    <button onClick={() => AddProductInCart(count)} className="buttons">Agregar al carrito</button>
    </>
  )
}

export default ItemCount