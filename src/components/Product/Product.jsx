import React from 'react';
import './Product.css'

const Product = (props) => {
    const addToCartHandler = props.addToCartHandler
    const {img, name , price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>Price: ${price}</p>
            <p><small>Manufactured By: {seller}</small></p>
            <p><small>Rating: {ratings}</small></p>
            </div>
            <button onClick={() => addToCartHandler(props.product)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;