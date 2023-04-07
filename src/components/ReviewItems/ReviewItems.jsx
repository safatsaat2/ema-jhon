import React from 'react';
import './ReviewItems.css'

const ReviewItems = (product) => {
    const {name, price, id, img, quantity} = product.product
    return (
        <div className='div'>
            <img className='img' src={img} alt="" />
            <h1>{name}</h1>
            
            
        </div>
    );
};

export default ReviewItems;