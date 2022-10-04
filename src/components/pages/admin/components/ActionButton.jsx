import React from 'react';

const ActionButton = ({buttonsClassName, name}) => {
    return (
        <button id={'action-btn'} className={buttonsClassName}>{name}</button>
    );
};

export default ActionButton;