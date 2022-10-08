import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import '../../../assets/styles/Login.css';
import AuthService from "../../../service/AuthService";
import ErrorMessage from "./components/ErrorMessage";
import UserValidator from "../../../validator/UserValidator";
import {Cookies} from "react-cookie"
import Alert from "./components/Alert";

const Login = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const validateForm = () => {
        let errorMessages = UserValidator.validateValuesForLogin(email, password);
        setEmailErrorMessage(errorMessages.emailErrorMessage);
        setPasswordErrorMessage(errorMessages.passwordErrorMessage);
        setIsValid(emailErrorMessage === '' && passwordErrorMessage === '');
        setShowAlert(false);
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
                    localStorage.setItem('user-email', response.data.email);
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
                        setShowAlert(true);
                    }
                });
        }
    };

    return (
        <div>
            <div className={'login-container'}>
                <h1>Login</h1>
                <Alert condition={showAlert} message={'User not found. Try using a different Email or Password.'}/>
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
                    <ErrorMessage message={emailErrorMessage}/>
                    <div className={'txt-field'}>
                        <input
                            type={"password"}
                            value={password}
                            onChange={handlePasswordChange}
                            required={true}
                        />
                        <label>Password</label>
                    </div>
                    <ErrorMessage message={passwordErrorMessage}/>
                    <input type={"submit"} value={'Login'}/>
                    <div className={'signup-link'}>
                        Not a member? <Link to={'/register'}>Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;