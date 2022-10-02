import React from 'react';
import {Link} from "react-router-dom";
import '../../assets/styles/Footer.css'

const Footer = () => {
    return (
        <footer>
            {'Copyright © '}
            <Link className={'domain-link'} to={'/certificates'}>
                CertificateShop
            </Link>
            {' ' + new Date().getFullYear() + '.'}
        </footer>
    );
};

export default Footer;