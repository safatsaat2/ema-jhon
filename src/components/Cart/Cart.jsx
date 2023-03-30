import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart)
    let total = 0;
    let totalShipping = 0
    for (const productPrice of cart){
        total = total + productPrice.price;
        totalShipping = totalShipping + productPrice.shipping;
    }
    let tax = total*7/100;
    let grandTotal = total + totalShipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Item: {cart.length}</p>
            <p>TOTAL Price: ${total}</p>
            <p>Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand TOTAL: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;