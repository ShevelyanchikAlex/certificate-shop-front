import React from 'react';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {Link} from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

const UserNavLinks = () => {
    return (
        <div className={'nav-links'}>
            <Link className={'nav-link'} to={'/certificates'}>
                <div className={'material-icons'}><HomeIcon/></div>
            </Link>
            <Link className={'nav-link'} to={'/about'}>
                <div className={'material-icons'}><InfoIcon/></div>
            </Link>
            <Link className={'nav-link'} to={'/checkout'}>
                <div className={'material-icons'}><ShoppingCartIcon/></div>
            </Link>
        </div>
    );
};

export default UserNavLinks;