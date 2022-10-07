import React from 'react';

const ErrorMessage = ({message}) => {
    return (
        <div>
            {message !== '' && <p className={'error-message'}>{message}</p>}
        </div>
    );
};

export default ErrorMessage;