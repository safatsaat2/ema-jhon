import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const OrderReview = () => {
    const products = useLoaderData();
    return (
        <div className='shop-container'>
            <div className='products-container'>
            <h2>Order Review:{products.length}</h2>
            </div>
            <div className="cart-container">
                <Cart cart={products}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;