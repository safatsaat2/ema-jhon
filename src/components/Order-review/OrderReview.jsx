import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './OrderReview.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState(products);

    const handleRemoveFromCart = id =>{
        const remaining = cart.filter(prd => prd.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart()
    }
    console.log(products)
    return (
        <div className='shop-container'>
            <div className='review-container'>
            {
                cart.map(product => <ReviewItems key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItems>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link to="/checkout"><button className='btn-checkout'>Proceed to Checkout</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;