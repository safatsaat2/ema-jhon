import React from 'react';
import './ReviewItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItems = (product) => {
    const { name, price, id, img, quantity } = product.product
    return (
        <div className='div'>
            <img className='img' src={img} alt="" />
            <div className='product-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-color'>${price}</span></p>
                <p>Quantity: <span className='orange-color'>${quantity}</span></p>
            </div>
            <button className='btn-delete'>
                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default ReviewItems;