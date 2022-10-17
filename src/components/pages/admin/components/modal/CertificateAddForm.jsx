import React, {useState} from 'react';
import ModalInputField from "./components/ModalInputField";
import ModalFormErrorMessage from "./components/ModalFormErrorMessage";
import ModalFormAlert from "./components/ModalFormAlert";
import {WithContext as ReactTags} from 'react-tag-input';
import CertificateValidator from "../../../../../validator/CertificateValidator";
import CertificateService from "../../../../../service/CertificateService";
import '../../../../../assets/styles/CertificateForm.css';

const CertificateAddForm = ({setVisible, setIsRefresh}) => {
    const [isValid, setIsValid] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [certificate, setCertificate] = useState({
        name: '', description: '', price: 1, duration: 0, tags: []
    });
    const [tags, setTags] = useState([]);
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('');
    const [priceErrorMessage, setPriceErrorMessage] = useState('');
    const [durationErrorMessage, setDurationErrorMessage] = useState('');
    const [tagsErrorMessage, setTagsErrorMessage] = useState('');

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
        setCertificate({
            ...certificate,
            name: '',
            description: '',
            price: 0,
            duration: 0,
            tags: []
        });
        setTags([]);
        setNameErrorMessage('');
        setDescriptionErrorMessage('');
        setPriceErrorMessage('');
        setDurationErrorMessage('');
        setTagsErrorMessage('');
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        validateForm();
        if (isValid) {
            CertificateService.save(certificate)
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
                        <button className={'register-button'} type="submit">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CertificateAddForm;