import React from 'react';
import '../../../../../assets/styles/CertificateDeleteModal.css';
import CertificateService from "../../../../../service/CertificateService";
import {useDispatch} from "react-redux";
import {setPageRefresh} from "../../../../../store/admin/AdminAction";

const CertificateDeleteModal = ({setVisible, id}) => {
    const changeVisibleHandler = () => setVisible(false);
    const dispatch = useDispatch();

    const handleDelete = async (e) => {
        e.preventDefault();
        CertificateService.delete(id)
            .then(() => {
                changeVisibleHandler();
                dispatch(setPageRefresh(true));
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