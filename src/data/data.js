import products from "./data.json"

const getProducts = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}

export { getProducts } 