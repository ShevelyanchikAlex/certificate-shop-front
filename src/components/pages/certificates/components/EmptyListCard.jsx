import React from 'react';
import EmptyListImage from '../../../../assets/images/empty-list.png';

const EmptyListCard = () => {
    return (
        <div className={'empty-list-container'}>
            <h1 className={'empty-list-header'}>No Data Found</h1>
            <img className="empty-list-image"
                 src={EmptyListImage}
                 alt="Empty List Image"/>
            <h3>Try reload this Page or adjusting your filter</h3>
        </div>
    );
};

export default EmptyListCard;