import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name , price, seller, quantity } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6>{name}</h6>
            <p>Price: ${price}</p>
            <p><small>Manufactured By: {seller}</small></p>
            <p><small>Amount: {quantity}</small></p>
        </div>
    );
};

export default Product;