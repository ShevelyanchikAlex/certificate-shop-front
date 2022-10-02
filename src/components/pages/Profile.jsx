import React from 'react';
import ProfileIcon from "../../assets/images/profile.png";
import '../../assets/styles/Profile.css';

const Profile = () => {
    return (
        <div className={'profile-container'}>
            <h1>Profile</h1>
            <div className={'profile-header'}>
                <img className="profile-icon"
                     src={ProfileIcon}
                     alt="Profile"/>
                <h2 className={'profile-name'}>Alex</h2>
            </div>
            <div className={'profile-content'}>
                <div className={'profile-content-item'}>
                    <label>Email</label>
                    <h3 className={'profile-content-email'}>shebcdcsn@gmail.com</h3>
                </div>
                <div className={'profile-content-item'}>
                    <label>Role</label>
                    <h3>User</h3>
                </div>
            </div>
        </div>
    );
};

export default Profile;