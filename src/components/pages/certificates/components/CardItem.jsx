import React from 'react';
import {useNavigate} from 'react-router-dom';

const CardItem = (props) => {
    const navigate = useNavigate();

    return (
        <div className="card-item">
            <div className="card">
                <img className="card-image"
                     src={props.image}
                     alt="Item's Image"/>
                <h1 className="card-name">{props.certificate.name}</h1>
                <p className="card-price">${props.certificate.price}</p>
                <p className="card-description">{props.certificate.description}</p>
                <p className="tags" hidden key={props.certificate.id}>{props.certificate.tags.map(tag => tag.name)}</p>
                <button className="card-button-detail"
                        onClick={() => navigate('/certificates/' + props.certificate.id)}>Details
                </button>
                <button className="card-button-add">Add to Cart</button>
            </div>
        </div>
    );
};

export default CardItem;