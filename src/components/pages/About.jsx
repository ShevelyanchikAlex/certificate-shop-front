import React from 'react';
import CertificateShopLogo from "../../assets/images/shopping-cart.png";
import '../../assets/styles/About.css';

const About = () => {
    return (
        <div className={'about-container'}>
            <h1 className={'about-header'}>About</h1>
            <div className={'certificate-shop-main-info'}>
                <img className="certificate-shop-logo"
                     src={CertificateShopLogo}
                     alt="Empty List Image"/>
                <h1 className={'certificate-shop-name'}>Certificate Shop</h1>
            </div>
            <p className={'certificate-shop-description'}>Lots of Certificate ideas! Bright emotions for everyone
                from GiftCertificateShop. Huge catalog. Choose a
                Certificate for yourself or as a gift! Any payment method. Fast and
                convenient.</p>
        </div>
    );
};

export default About;