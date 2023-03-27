import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [cart, setCart] = useState([])

    const addToCartHandler = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product addToCartHandler={addToCartHandler} product={product} key={product.id}></Product>)
                }
            </div>
            <div className="cart">
                <h3>TOTAL: {cart.length}</h3>
            </div>
        </div>
    );
};

export default Shop;