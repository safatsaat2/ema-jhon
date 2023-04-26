import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, handleClearCart, children}) => {
    
    let total = 0;
    let totalShipping = 0
    let quantity = 0
    for (const productPrice of cart){
        productPrice.quantity = productPrice.quantity || 1;
        total = total + productPrice.price * productPrice.quantity;
        totalShipping = totalShipping + productPrice.shipping;
        quantity = quantity + productPrice.quantity;
    }
    let tax = total*7/100;
    let grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Item: {quantity}</p>
            <p>TOTAL Price: ${total}</p>
            <p>Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand TOTAL: ${grandTotal.toFixed(2)}</p>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
            {children}
        </div>
    );
};

export default Cart;