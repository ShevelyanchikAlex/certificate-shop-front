import React from 'react';
import {Link, useLocation} from "react-router-dom";
import '../../assets/styles/Footer.css'

const Footer = () => {
    const {pathname} = useLocation();

    return (
        pathname !== '/certificates' &&
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