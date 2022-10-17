import React, {useEffect, useState} from 'react';
import CertificateValidator from "../../../../../validator/CertificateValidator";
import ModalFormAlert from "./components/ModalFormAlert";
import ModalInputField from "./components/ModalInputField";
import ModalFormErrorMessage from "./components/ModalFormErrorMessage";
import {WithContext as ReactTags} from "react-tag-input";
import '../../../../../assets/styles/CertificateForm.css';
import CertificateService from "../../../../../service/CertificateService";

const CertificateEditForm = ({setVisible, certificateData, setIsRefresh}) => {
    const [isValid, setIsValid] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [certificate, setCertificate] = useState({
        id: 0, name: '', description: '', price: 1, duration: 0, tags: []
    });
    const [tags, setTags] = useState([]);
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('');
    const [priceErrorMessage, setPriceErrorMessage] = useState('');
    const [durationErrorMessage, setDurationErrorMessage] = useState('');
    const [tagsErrorMessage, setTagsErrorMessage] = useState('');

    useEffect(() => {
        if (certificateData) {
            setCertificate({
                id: certificateData.id, name: certificateData.name, description: certificateData.description,
                price: certificateData.price, duration: certificateData.duration, tags: certificateData.tags
            });
            setTags(
                certificateData.tags.map(tag => {
                    return {
                        id: tag.name,
                        text: tag.name
                    };
                })
            );
        }

    }, [setVisible, certificateData]);

    const handleTagDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
        mapTagInCertificate();
    };

    const handleTagAdd = tag => {
        setTags([...tags, tag]);
        mapTagInCertificate();
    };

    const mapTagInCertificate = () => {
        setCertificate({
            ...certificate, tags: tags.map(tag => {
                return {
                    name: tag.text
                };
            })
        });
    }

    const handleTagDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
        setTags(newTags);
    };

    const handleNameChange = (event) => {
        setCertificate({...certificate, name: event.target.value});
    }

    const handleDescriptionChange = (event) => {
        setCertificate({...certificate, description: event.target.value});
    }

    const handlePriceChange = (event) => {
        setCertificate({...certificate, price: event.target.value});
    }

    const handleDurationChange = (event) => {
        setCertificate({...certificate, duration: event.target.value});
    }

    const handleCloseForm = () => {
        setNameErrorMessage('');
        setDescriptionErrorMessage('');
        setPriceErrorMessage('');
        setDurationErrorMessage('');
        setTagsErrorMessage('');
        setShowAlert(false);
        setVisible(false);
    }

    const validateForm = () => {
        let errorMessages = CertificateValidator.validateCertificate(certificate.name, certificate.description,
            certificate.price, certificate.duration, tags);
        setNameErrorMessage(errorMessages.nameErrorMessage);
        setDescriptionErrorMessage(errorMessages.descriptionErrorMessage);
        setPriceErrorMessage(errorMessages.priceErrorMessage);
        setDurationErrorMessage(errorMessages.durationErrorMessage);
        setTagsErrorMessage(errorMessages.tagErrorMessage);
        setIsValid(nameErrorMessage === '' && descriptionErrorMessage === ''
            && priceErrorMessage === '' && durationErrorMessage === '' && tagsErrorMessage === '');
        setShowAlert(false);
    }

    const getRequestCertificate = () => {
        return (certificateData.name !== certificate.name) ? certificate
            : {
                id: certificate.id, description: certificate.description, price: certificate.price,
                duration: certificate.duration, tags: certificate.tags
            };
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        validateForm();
        if (isValid) {
            const request = getRequestCertificate();
            CertificateService.update(request)
                .then(() => {
                    handleCloseForm();
                    setIsRefresh(true);
                })
                .catch(e => {
                    if (e.response.status === 400) {
                        setShowAlert(true);
                    }
                });
        }
    };

    return (
        <div className="modal-form-container">
            <h1>Edit Certificate with id={certificate.id}</h1>
            <ModalFormAlert condition={showAlert} message={'Certificate with same title exist. Try change title.'}/>
            <form method="post" onSubmit={handleSubmit}>
                <div className={'row'}>
                    <div className={'column'}>
                        <ModalInputField type={'text'} value={certificate.name} handler={handleNameChange}
                                         label={'Title'}/>
                        <ModalFormErrorMessage message={nameErrorMessage}/>
                        <ModalInputField type={'text'} value={certificate.description} handler={handleDescriptionChange}
                                         label={'Description'}/>
                        <ModalFormErrorMessage message={descriptionErrorMessage}/>
                    </div>
                    <div className={'column'}>
                        <ModalInputField type={'number'} value={certificate.price} handler={handlePriceChange}
                                         label={'Price'}/>
                        <ModalFormErrorMessage message={priceErrorMessage}/>
                        <ModalInputField type={'number'} value={certificate.duration} handler={handleDurationChange}
                                         label={'Duration'}/>
                        <ModalFormErrorMessage message={durationErrorMessage}/>
                    </div>
                </div>
                <div className={'tags-container'}>
                    <label className={'tag-label'}>Tags</label>
                    <ReactTags
                        tags={tags}
                        handleDelete={handleTagDelete}
                        handleAddition={handleTagAdd}
                        handleDrag={handleTagDrag}
                        inputFieldPosition="top"
                        autocomplete
                    />
                </div>
                <ModalFormErrorMessage message={tagsErrorMessage}/>
                <div className={'buttons-column'}>
                    <div className={'button'}>
                        <button type="button" className={'cancel-button'} onClick={() => handleCloseForm()}>Cancel
                        </button>
                    </div>
                    <div className={'button'}>
                        <button className={'register-button'} type="submit">Edit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CertificateEditForm;