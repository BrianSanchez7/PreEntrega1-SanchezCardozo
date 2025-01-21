import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

    //Se guarda el carrito en localStorage para no perderlo al recargar la página
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"))
    const [cart, setCart] = useState( cartLocalStorage ? cartLocalStorage : [])

    useEffect(() => {
      localStorage.setItem("cart-ecommerce", JSON.stringify(cart))     
    }, [cart])
    


    const addProduct = (newProduct) => {
        const index = cart.findIndex( (productCart) => productCart.id === newProduct.id )
        
        if (index === -1){
            //Se agrega el producto nuevo
            setCart([...cart, newProduct])
        }else{
            //Se modifica la cantidad del producto existente
            const newCart = [...cart]
            newCart[index].quantity += newProduct.quantity
            setCart(newCart)
        }
    }

    const deleteProductById = (idProduct) => {
        const filterProducts = cart.filter ((productCart)=> productCart.id !== idProduct )
        setCart(filterProducts)
    }

    const totalQuantity = () =>{
        const quantity = cart.reduce( (total, productCart) => total + productCart.quantity , 0 )
        return quantity
    }

    const totalPrice = () => {
        const price = cart.reduce ((total, productCart) => total + (productCart.quantity * productCart.price), 0)
        return price
    }

    const deleteCart = () =>{
        setCart([])
    }
  return( 
        <CartContext.Provider value={{ addProduct, cart, totalQuantity, totalPrice, deleteProductById, deleteCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
