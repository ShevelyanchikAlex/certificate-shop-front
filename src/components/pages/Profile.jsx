import React, {useEffect, useState} from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import UserService from "../../service/UserService";
import LoadingSpinner from "./certificates/components/LoadingSpinner";
import Forbidden from "./Forbidden";
import '../../assets/styles/Profile.css';
import {useDispatch, useSelector} from "react-redux";
import {setEmail, setIsAuth, setRole, setUserName} from "../../store/user/UserAction";

const Profile = () => {
    const userName = useSelector(state => state.userData.userName);
    const email = useSelector(state => state.userData.email);
    const role = useSelector(state => state.userData.role);
    const isAuth = useSelector(state => state.userData.isAuth);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        changeIsLoadingHandler(true)
        const localStorageEmail = localStorage.getItem("user-email");
        UserService.getUserByEmail(localStorageEmail)
            .then(response => {
                dispatch(setIsAuth(true));
                dispatch(setEmail(response.data.email));
                dispatch(setUserName(response.data.name));
                dispatch(setRole(response.data.role));
                changeIsLoadingHandler(false)
            })
            .catch(() => changeIsLoadingHandler(false));
    }, []);

    const changeIsLoadingHandler = (isLoading) => setIsLoading(isLoading);

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