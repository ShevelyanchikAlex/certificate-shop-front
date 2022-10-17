import React from 'react';
import '../../../../../assets/styles/CertificateDeleteModal.css';
import CertificateService from "../../../../../service/CertificateService";

const CertificateDeleteModal = ({setVisible, id, setIsRefresh}) => {
    const changeVisibleHandler = () => setVisible(false);

    const handleDelete = async (e) => {
        e.preventDefault();
        CertificateService.delete(id)
            .then(() => {
                changeVisibleHandler();
                setIsRefresh(true);
            })
            .catch(e => changeVisibleHandler());
    };

    return (
        <div className="certificate-delete-container">
            <h1 className={'certificate-delete-header'}>Delete confirmation</h1>
            <div className="certificate-delete-card">
                <h2 className="certificate-delete-text">
                    Do you really want to delete Certificate with id = {id}?
                </h2>
                <div className={'buttons-container'}>
                    <button onClick={changeVisibleHandler} className="certificate-delete-button">Cancel</button>
                    <button id={'delete-button'} onClick={handleDelete} className="certificate-delete-button">Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CertificateDeleteModal;