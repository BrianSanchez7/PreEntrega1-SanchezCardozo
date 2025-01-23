import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import NotFound from "../NotFound/NotFound.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [noProduct, setNoProduct] = useState(false);

  const { idProduct } = useParams();

  const getProduct = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, "products", idProduct);
      const dataDb = await getDoc(docRef);
      const data = { id: dataDb.id, ...dataDb.data() };

      //Se verifica si existe el producto
      const dataLenght = Object.keys(data).length;
      if (dataLenght > 1) {
        console.log("el producto existe");
        setNoProduct(false);
      } else {
        console.log("el producto no existe");
        setNoProduct(true);
      }
      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [idProduct]);

  return (
      loading === true ? <Loading /> : <ItemDetail product={product} noProduct={noProduct}/>
      );
};
export default ItemDetailContainer;
