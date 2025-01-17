import products from "./data.json"

const getProducts = () => {
    return new Promise ((resolve, reject) =>{
        resolve(products)
    })
}

export { getProducts } 