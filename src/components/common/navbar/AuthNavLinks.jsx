import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdminNavLinks from "./AdminNavLinks";
import UserNavLinks from "./UserNavLinks";
import UserService from "../../../service/UserService";

const AuthNavLinks = ({handleLogout}) => {
    const ADMIN_ROLE = 'ADMIN';
    const [role, setRole] = useState('');

    useEffect(() => {
        const localStorageEmail = localStorage.getItem("user-email");
        UserService.getUserByEmail(localStorageEmail)
            .then(response => {
                setRole(response.data.role);
            });
        console.log('upd')
    }, []);

    return (
        <div className={'nav-links'}>
            {role === ADMIN_ROLE ? <AdminNavLinks/> : <UserNavLinks/>}
            <Link className={'nav-link'} to={'/profile'}>
                <div className={'material-icons'}><AccountCircleIcon/></div>
            </Link>
            <Link id="login-button" className={'nav-link'} onClick={handleLogout}>Logout</Link>
        </div>
    );
};

export default AuthNavLinks;