import React from 'react';
import NotFoundImage from '../../assets/images/404.jpeg';
import '../../assets/styles/NotFound.css';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className={'not-found-container'}>
            <img src={NotFoundImage} className={'not-found-image'} alt={'Not found Image'}/>
            <div className={'message-container'}>
                <h2>Sorry, we can't find that page :(</h2>
            </div>

            <button className={'back-home-button'}><Link to={'/certificates'} className={'back-home-link'}>Back
                Home</Link></button>
        </div>
    );
};

export default NotFound;