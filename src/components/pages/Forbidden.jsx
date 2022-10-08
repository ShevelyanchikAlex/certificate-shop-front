import React from 'react';
import ForbiddenImage from "../../assets/images/403.png";
import {Link} from "react-router-dom";
import '../../assets/styles/Forbidden.css';

const Forbidden = () => {
    return (
        <div className={'forbidden-container'}>
            <h1 className={'forbidden-header'}>Forbidden</h1>
            <img src={ForbiddenImage} className={'forbidden-image'} alt={'Forbidden Image'}/>
            <h3>You don't have permission to access this resource.</h3>
            <button className={'back-home-button'}>
                <Link to={'/certificates'} className={'back-home-link'}>Back Home</Link>
            </button>
        </div>
    );
};

export default Forbidden;