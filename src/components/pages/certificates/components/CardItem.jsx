import React from 'react';

const CardItem = ({image, title, price, description, tags}) => {
    return (
        <div className="card-item">
            <div className="card">
                <img className="card-image"
                     src={image}
                     alt="Item's Image"/>
                <h1 className="card-name">{title}</h1>
                <p className="card-price">{price}</p>
                <p className="card-description">{description}</p>
                <p className="tags" hidden>{tags}</p>
                <p>
                    <button className="card-button-detail">Detail
                    </button>
                </p>
                <p>
                    <button className="card-button-add">Add to Cart</button>
                </p>
            </div>
        </div>
    );
};

export default CardItem;