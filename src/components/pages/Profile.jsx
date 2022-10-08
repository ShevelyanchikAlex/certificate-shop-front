import React, {useEffect, useState} from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UserService from "../../service/UserService";
import LoadingSpinner from "./certificates/components/LoadingSpinner";
import Forbidden from "./Forbidden";
import '../../assets/styles/Profile.css';

const Profile = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const localStorageEmail = localStorage.getItem("user-email");
        UserService.getUserByEmail(localStorageEmail)
            .then(response => {
                setIsAuth(true);
                setEmail(response.data.email);
                setUserName(response.data.name);
                setRole(response.data.role);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, []);

    return (
        isLoading ? <LoadingSpinner/>
            : (isAuth ? <div className={'profile-container'}>
                        <h1>Profile</h1>
                        <div className={'profile-header'}>
                            <AccountCircleIcon className={'profile-icon'}/>
                            <h2 className={'profile-name'}>{userName}</h2>
                        </div>
                        <div className={'profile-content'}>
                            <div className={'profile-content-item'}>
                                <label>Email</label>
                                <h3 className={'profile-content-email'}>{email}</h3>
                            </div>
                            <div className={'profile-content-item'}>
                                <label>Role</label>
                                <h3>{role}</h3>
                            </div>
                        </div>
                    </div>
                    : <Forbidden/>
            )
    );
};

export default Profile;