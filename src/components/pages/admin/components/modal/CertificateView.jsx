import React from 'react';
import CertificateDefault from "../../../../../assets/images/certificate-default.png";
import '../../../../../assets/styles/CertificateView.css';

const CertificateView = ({setVisible, certificate}) => {
    return (
        <div className="modal-view-container">
            <h1 className={'modal-view-header'}>Certificate with id={certificate.id}</h1>
            <div className="modal-view-card">
                <div className="modal-view-column">
                    <img className="modal-view-card-image"
                         src={CertificateDefault}
                         alt="Certificate Default"/>
                </div>
                <div className="modal-view-column">
                    <h1 className="card-item-name">{certificate.name}</h1>
                    <p className="card-item-description">{certificate.description}</p>
                    <p className="card-item-price">${certificate.price}</p>
                    <p className="update-date">
                        Last Update: {new Date(certificate.lastUpdateDate).toLocaleDateString()}
                    </p>
                    <button onClick={() => setVisible(false)} className="card-button">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default CertificateView;