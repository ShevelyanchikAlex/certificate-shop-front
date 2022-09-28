import React from 'react';
import {Link} from "react-router-dom";
import certificateShopLogo from '../../assets/images/shopping-cart.png';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../../assets/styles/Header.css';

const Header = () => {
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
                    <Link className={'nav-link'} to={'/checkout'}>
                        <div className={'material-icons'}><ShoppingCartIcon/></div>
                    </Link>
                    <Link id="login-button" className={'nav-link'} to={'/login'}>Login</Link>
                    <Link id="sign-up-button" className={'nav-link'} to={'/register'}>Sign Up</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;