import React from 'react';
import NotFoundImage from '../../assets/images/404.jpeg';
import '../../assets/styles/NotFound.css';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className={'not-found-container'}>
            <h1 className={'not-found-header'}>Page Not Found</h1>
            <img src={NotFoundImage} className={'not-found-image'} alt={'Not found Image'}/>
            <h3>Sorry, we can't find that page :(</h3>
            <button className={'back-home-button'}>
                <Link to={'/certificates'} className={'back-home-link'}>Back Home</Link>
            </button>
        </div>
    );
};

export default NotFound;