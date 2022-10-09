import React, {useState} from 'react';
import ModalInputField from "./components/ModalInputField";
import ModalFormErrorMessage from "./components/ModalFormErrorMessage";
import ModalFormAlert from "./components/ModalFormAlert";
import {WithContext as ReactTags} from 'react-tag-input';
import CertificateValidator from "../../../../../validator/CertificateValidator";
import '../../../../../assets/styles/CertificateForm.css';

const CertificateForm = () => {
    const [isValid, setIsValid] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [certificate, setCertificate] = useState({
        id: 0, name: '', description: '',
        price: 0, duration: 1, createDate: Date.now(), lastUpdateDate: Date.now(), tags: []
    });
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('');
    const [priceErrorMessage, setPriceErrorMessage] = useState('');
    const [durationErrorMessage, setDurationErrorMessage] = useState('');
    const [tagsErrorMessage, setTagsErrorMessage] = useState('');

    const handleTagDelete = i => {
        setCertificate({...certificate, tags: certificate.tags.filter((tag, index) => index !== i)});
    };

    const handleTagAdd = tag => {
        setCertificate({...certificate, tags: [...certificate.tags, tag]});
    };

    const handleTagDrag = (tag, currPos, newPos) => {
        const newTags = certificate.tags.slice();
        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);
        setCertificate({...certificate, tags: [...certificate.tags, newTags]});
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

    const validateForm = () => {
        let errorMessages = CertificateValidator.validateCertificate(certificate.name, certificate.description,
            certificate.price, certificate.duration, certificate.tags);
        setNameErrorMessage(errorMessages.nameErrorMessage);
        setDescriptionErrorMessage(errorMessages.descriptionErrorMessage);
        setPriceErrorMessage(errorMessages.priceErrorMessage);
        setDurationErrorMessage(errorMessages.durationErrorMessage);
        setTagsErrorMessage(errorMessages.tagErrorMessage);
        setIsValid(nameErrorMessage === '' && descriptionErrorMessage === ''
            && priceErrorMessage === '' && durationErrorMessage === '' && tagsErrorMessage === '');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        validateForm();
    };

    return (
        <div className="modal-form-container">
            <h1>Add Certificate</h1>
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
                        tags={certificate.tags}
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
                        <button type="button" className={'cancel-button'} onClick={() => {
                        }}>Cancel
                        </button>
                    </div>
                    <div className={'button'}>
                        <button className={'register-button'} type="submit">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CertificateForm;