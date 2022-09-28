import React from 'react';

const InputField = ({type, label}) => {
    return (
        <div className={'input-field'}>
            <input type={type} required/>
            <label>{label}</label>
        </div>
    );
};

export default InputField;