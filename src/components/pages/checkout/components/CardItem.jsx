import React from 'react';

const CheckoutCardItem = ({image, title, price}) => {
    return (
        <div className="checkout-card-item">
            <div className="image-box">
                <img className="image"
                     src={image}/>
            </div>
            <div className="card-item-info">
                <h1>{title}</h1>
            </div>
            <div className="card-price">
                <h2 className="amount">{price}</h2>
                <button className="remove-button">Remove</button>
            </div>
        </div>
    );
};

export default CheckoutCardItem;