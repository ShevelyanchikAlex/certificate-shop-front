import React from 'react';
import classes from "../../../../../assets/styles/Modal.module.css";

const Modal = ({children, visible, setVisible}) => {
    const rootClasses = [classes.modalForm];
    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalFormContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;