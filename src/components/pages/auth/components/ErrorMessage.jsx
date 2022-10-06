import React from 'react';

const ErrorMessage = ({condition, message}) => {
    return (
        <div>
            {condition !== '' && <p className={'error-message'}>{message}</p>}
        </div>
    );
};

export default ErrorMessage;