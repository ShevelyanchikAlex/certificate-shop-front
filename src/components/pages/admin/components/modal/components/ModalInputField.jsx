import React from 'react';

const ModalInputField = ({type, value, handler, label}) => {
    return (
        <div className={'input-field'}>
            <input
                type={type}
                value={value}
                onChange={handler}
                required={true}/>
            <label>{label}</label>
        </div>
    );
};

export default ModalInputField;