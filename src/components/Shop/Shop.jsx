import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() =>{
        const idFromlocal = getShoppingCart();
        const savedProduct = [];
        for(const id in idFromlocal){
          const addedProduct =  products.find(product => product.id === id);
          if(addedProduct){
            const quantity = idFromlocal[id];
            addedProduct.quantity = quantity;
            savedProduct.push(addedProduct)
          }
          console.log(addedProduct);
        }
        setCart(savedProduct);

    }, [products])

    const [cart, setCart] = useState([])

    const addToCartHandler = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)

    }
    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product addToCartHandler={addToCartHandler} product={product} key={product.id}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                handleClearCart={handleClearCart}>
                    <Link to="/Order-Review">
                        <button className='btn-checkout'>Review Orders</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;