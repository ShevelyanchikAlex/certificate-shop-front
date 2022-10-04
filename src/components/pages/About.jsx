import React from 'react';
import '../../assets/styles/About.css';
import AboutImage from "../../assets/images/about.jpeg";

const About = () => {
    return (
            <div className={'about-container'}>
                <div className={'about-description'}>
                    <h1 className={'about-header'}>Certificate Shop</h1>
                    <p className={'certificate-shop-description'}>Lots of Certificate ideas! Bright emotions for
                        everyone
                        from GiftCertificateShop. Huge catalog. New certificates added daily. Choose a
                        Certificate for yourself or as a gift! Any payment method. Fast and
                        convenient.</p>
                </div>
                <img src={AboutImage} className={'about-image'} alt={'About Image'}/>
            </div>
    );
};

export default About;