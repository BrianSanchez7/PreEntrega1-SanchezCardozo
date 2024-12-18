import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"
import Loading from "../Loading/Loading.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false)

  const { idProduct } = useParams()

  useEffect(()=> {
    setLoading(true)

    getProducts()
      .then( (data) => {
        const productFind = data.find( (dataProduct) => dataProduct.id === idProduct )
        setProduct(productFind)
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() =>{
        setLoading(false)
      })
  }, [idProduct])

  return (

    
      loading === true ? <Loading /> : <ItemDetail product={product} />
    
    
  )
}
export default ItemDetailContainer