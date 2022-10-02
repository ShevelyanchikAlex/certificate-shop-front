import React, {useState} from 'react';
import {Link} from "react-router-dom";
import CertificateService from "../../service/CertificateService";
import '../../assets/styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = async (e) => {
        e.preventDefault();
        CertificateService.login(email).then(response => console.log(response.data))
            .catch(e => console.log(e));
        ;
    };

    return (
        <div className={'login-container'}>
            <h1>Login</h1>
            <form method={'post'} onSubmit={handleSubmit}>
                <div className={'txt-field'}>
                    <input
                        type={"email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}/>
                    <label>Email</label>
                </div>
                <div className={'txt-field'}>
                    <input
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required={true}/>
                    <label>Password</label>
                </div>
                <input type={"submit"} value={'Login'}/>
                <div className={'signup-link'}>
                    Not a member? <Link to={'/register'}>Sign Up</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;