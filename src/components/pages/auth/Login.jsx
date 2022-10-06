import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import '../../../assets/styles/Login.css';
import AuthService from "../../../service/AuthService";
import ErrorMessage from "./components/ErrorMessage";
import UserValidator from "../../../validator/UserValidator";
import {Cookies} from "react-cookie"

const Login = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const validateForm = () => {
        let errorMessages = UserValidator.validateEmailAndPassword(email, password);
        setEmailErrorMessage(errorMessages.emailErrorMessage);
        setPasswordErrorMessage(errorMessages.passwordErrorMessage);
        setIsValid(emailErrorMessage === '' && passwordErrorMessage === '');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        validateForm();
        if (isValid) {
            const authRequest = {
                email: email,
                password: password,
            };
            AuthService.login(authRequest)
                .then(response => {
                    localStorage.setItem('user', response.data.email);
                    cookies.set("token", response.data.token,
                        {
                            path: "/",
                            sameSite: "strict",
                            maxAge: 604800
                        });
                    navigate('/certificates');
                })
                .catch(e => {
                    console.log(e.response.status)
                    if (e.response.status === 403) {
                        alert('Your account was not found. Try again.')
                    }
                });
        }
    };

    return (
        <div className={'login-container'}>
            <h1>Login</h1>
            <form method={'post'} onSubmit={handleSubmit}>
                <div className={'txt-field'}>
                    <input
                        type={"email"}
                        value={email}
                        onChange={handleEmailChange}
                        required={true}
                    />
                    <label>Email</label>
                </div>
                <ErrorMessage condition={emailErrorMessage} message={emailErrorMessage}/>
                <div className={'txt-field'}>
                    <input
                        type={"password"}
                        value={password}
                        onChange={handlePasswordChange}
                        required={true}
                    />
                    <label>Password</label>
                </div>
                <ErrorMessage condition={passwordErrorMessage} message={passwordErrorMessage}/>
                <input type={"submit"} value={'Login'}/>
                <div className={'signup-link'}>
                    Not a member? <Link to={'/register'}>Sign Up</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;