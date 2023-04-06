import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoaders = async () =>
{
     const loadedProducts = await fetch ('products.json');
     const products = await loadedProducts.json();

    const idFromLocal = getShoppingCart();
    const savedProduct = [];

    console.log(idFromLocal)

    for( const id in idFromLocal){
        const addedProducts = products.find(pd => pd.id === id )
        if(addedProducts){
            const quantity = idFromLocal[id];
            addedProducts.quantity = quantity;
            savedProduct.push(addedProducts)
          }
        console.log(addedProducts)
    }
     console.log(products);
     return savedProduct;
}

export default cartProductsLoaders;