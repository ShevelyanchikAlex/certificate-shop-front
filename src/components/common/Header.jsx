import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import certificateShopLogo from '../../assets/images/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
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
            <div className={'search-box-container'}/>
            <nav>
                <ul className={'nav-links'}>
                    <Link className={'nav-link'} to={'/certificates'}>
                        <div className={'material-icons'}><HomeIcon/></div>
                    </Link>
                    <Link className={'nav-link'} to={'/about'}>
                        <div className={'material-icons'}><InfoIcon/></div>
                    </Link>
                    {localStorage.getItem("user-email") ? <AuthNavLinks handleLogout={handleLogout}/> : <UnAuthNavLinks/>}
                </ul>
            </nav>
        </header>
    );
};

export default Header;