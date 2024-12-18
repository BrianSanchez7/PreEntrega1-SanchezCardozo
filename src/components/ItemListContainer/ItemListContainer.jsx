import ItemList from "./ItemList.jsx";
import { useState, useEffect } from "react";
import { getProducts } from "../../data/data.js";
import "./itemlistcontainer.css";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  const { idCategory } = useParams()

  useEffect(() => {
    setLoading(true)

    getProducts()
      .then((data) => {
        if(idCategory){
          //Filtro de productos por categoria
          const filterProducts = data.filter ((product) => product.category === idCategory)
          setProducts(filterProducts)
        }else{
          //Seteo de todos los productos
          setProducts(data)
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() =>{
        setLoading(false)
      })
  }, [idCategory]);

  return (
    <div className="itemlist-container">
      <h1>{saludo}</h1>

      {
        loading === true ? <Loading /> : <ItemList products={products}/>
      }
            
    </div>
  );
};

export default ItemListContainer;
