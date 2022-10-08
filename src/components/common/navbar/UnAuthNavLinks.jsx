import React from 'react';
import {Link} from "react-router-dom";

const UnAuthNavLinks = () => {
    return (
        <div className={'nav-links'}>
            <Link id="login-button" className={'nav-link'} to={'/login'}>Login</Link>
            <Link id="sign-up-button" className={'nav-link'} to={'/register'}>Sign Up</Link>
        </div>
    );
};

export default UnAuthNavLinks;