import React from 'react';
import {useNavigate} from "react-router-dom";
import certificateShopLogo from '../../assets/images/logo.png';
import '../../assets/styles/Header.css';
import AuthNavLinks from "./navbar/AuthNavLinks";
import UnAuthNavLinks from "./navbar/UnAuthNavLinks";
import AuthService from "../../service/AuthService";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        AuthService.logout()
            .then(() => {
                navigate('/login');
            })
            .catch(e => console.log(e.response.status));
    };

    return (
        <header>
            <div className={'logo'}>
                <img src={certificateShopLogo} className={'certificate-shop-logo'} alt={'icon'}/>
                <label className={'certificate-shop-name'}>Certificate Shop</label>
            </div>
            <nav>
                <ul className={'nav-links'}>
                    {localStorage.getItem("user-email") ? <AuthNavLinks handleLogout={handleLogout}/> :
                        <UnAuthNavLinks/>}
                </ul>
            </nav>
        </header>
    );
};

export default Header;