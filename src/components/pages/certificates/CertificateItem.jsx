import React, {useEffect, useState} from 'react';
import '../../../assets/styles/CertificateItem.css';
import {useNavigate, useParams} from "react-router-dom";
import CertificateService from "../../../service/CertificateService";

const CertificateItem = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [certificate, setCertificate] = useState({});

    useEffect(() => {
        CertificateService.getById(params.id)
            .then(response => setCertificate(response.data))
            .catch(e => console.log(e));
    }, []);

    return (
        <div className="element-item">
            <div className="card">
                <div className="column">
                    <img className="card-image"
                         src="https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/298/2016/01/18/569cca9b733ec.jpg"
                         alt="Denim Jeans"/>
                </div>
                <div className="column">
                    <h1 className="card-item-name">{certificate.name}</h1>
                    <p className="card-item-description">{certificate.description}</p>
                    <p className="card-item-price">${certificate.price}</p>
                    <p className="update-date">
                        Last Update: {new Date(certificate.lastUpdateDate).toLocaleDateString()}
                    </p>
                    <div id="buttons-column" className="column">
                        <button id="back-button" onClick={() => navigate(-1)} className="card-button">Back</button>
                        <button id="add-button" className="card-button">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateItem;