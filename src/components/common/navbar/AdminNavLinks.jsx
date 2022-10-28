import React from 'react';
import {Link} from "react-router-dom";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import PeopleIcon from "@mui/icons-material/People";

const AdminNavLinks = () => {
    return (
        <div className={'nav-links'}>
            <Link className={'nav-link'} to={'/admin/certificates'}>
                <div className={'material-icons'}><CardGiftcardIcon/></div>
            </Link>
            <Link className={'nav-link'} to={'/admin/users'}>
                <div className={'material-icons'}><PeopleIcon/></div>
            </Link>
        </div>
    );
};

export default AdminNavLinks;