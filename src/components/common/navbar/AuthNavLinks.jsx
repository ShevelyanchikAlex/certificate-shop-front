import React from 'react';
import {Link} from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const AuthNavLinks = ({handleLogout}) => {
    return (
        <div className={'nav-links'}>
            <Link className={'nav-link'} to={'/checkout'}>
                <div className={'material-icons'}><ShoppingCartIcon/></div>
            </Link>
            <Link className={'nav-link'} to={'/profile'}>
                <div className={'material-icons'}><AccountCircleIcon/></div>
            </Link>
            <Link id="login-button" className={'nav-link'} onClick={handleLogout}>Logout</Link>
        </div>
    );
};

export default AuthNavLinks;