import React from 'react';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {Link} from "react-router-dom";

const UserNavLinks = () => {
    return (
        <div className={'nav-links'}>
            <Link className={'nav-link'} to={'/checkout'}>
                <div className={'material-icons'}><ShoppingCartIcon/></div>
            </Link>
        </div>
    );
};

export default UserNavLinks;