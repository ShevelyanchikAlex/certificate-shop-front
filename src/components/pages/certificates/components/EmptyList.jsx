import React from 'react';
import EmptyListImage from '../../../../assets/images/empty-list.png';

const EmptyList = () => {
    return (
        <div className={'empty-list-container'}>
            <img className="empty-list-image"
                 src={EmptyListImage}
                 alt="Empty List Image"/>
            <h2>Oops...<br/> No Data Found :(</h2>
        </div>
    );
};

export default EmptyList;