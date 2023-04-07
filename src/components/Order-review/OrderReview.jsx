import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './OrderReview.css'

const OrderReview = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div className='shop-container'>
            <div className='review-container'>
            {
                products.map(product => <ReviewItems key={product.id} product={product}></ReviewItems>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={products}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;