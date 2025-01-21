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

  const getProducts = async () => {
    try {
      setLoading(true)
      const dataDb = await getDocs(collectionName)

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false)
    }
  };

  const getProductsByCategory = async() =>{

    try {
      const q = query(collectionName, where("category", "==", idCategory))
    const dataDb = await getDocs(q)
    const data = dataDb.docs.map((productDb) => {
      return { id: productDb.id, ...productDb.data() };
    });
    setProducts(data);
    } catch (error) {
      console.log(error)
    }
    
  }
  useEffect(() => {
    if(idCategory){
      getProductsByCategory()
    }else{
      getProducts()
    }
    
  }, [idCategory]);

  return (
    <div className="itemlist-container">
      <h1>{saludo}</h1>

      {loading === true ? <Loading /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;
