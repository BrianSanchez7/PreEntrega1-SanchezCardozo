import ItemList from "./ItemList.jsx";
import { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db.js";
import "./itemlistcontainer.css";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";


const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { idCategory } = useParams();
  const collectionName = collection(db, "products");

  const getProducts = async (queryCondition = null) => {
    try {
      setLoading(true);
      const q = queryCondition 
        ? query(collectionName, where("category", "==", queryCondition)) 
        : collectionName;
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((product) => ({
        id: product.id,
        ...product.data(),
      }));

      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getProducts(idCategory);
  }, [idCategory]);

  return (
    <div className="itemlist-container">
      <h1>{saludo}</h1>
      {loading === true ? <Loading /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
