import React, {useState} from 'react';
import '../../../../assets/styles/SignUp.css';
import InputField from "./components/InputField";
import {useNavigate} from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import Alert from "../components/Alert";
import UserValidator from "../../../../validator/UserValidator";
import AuthService from "../../../../service/AuthService";

const SignUp = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [repeatPasswordErrorMessage, setRepeatPasswordErrorMessage] = useState('');
    const [equalsPasswordsErrorMessage, setEqualsPasswordErrorMessage] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleRepeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const validateForm = () => {
        let errorMessages = UserValidator.validateValuesForSignUp(name, email, password, repeatPassword);
        setNameErrorMessage(errorMessages.nameErrorMessage);
        setEmailErrorMessage(errorMessages.emailErrorMessage);
        setPasswordErrorMessage(errorMessages.passwordErrorMessage);
        setRepeatPasswordErrorMessage(errorMessages.repeatPasswordErrorMessage);
        setEqualsPasswordErrorMessage(errorMessages.equalsPasswordsErrorMessage);
        setIsValid(emailErrorMessage === '' && passwordErrorMessage === ''
            && nameErrorMessage === '' && repeatPasswordErrorMessage === '' && equalsPasswordsErrorMessage === '');
        setShowAlert(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        validateForm();
        if (isValid) {
            const authRequest = {
                name: name,
                email: email,
                password: password,
            };
            AuthService.signUp(authRequest)
                .then(() => navigate('/login'))
                .catch(e => {
                    console.log(e.response.status)
                    if (e.response.status === 400) {
                        setShowAlert(true);
                    }
                });
        }
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            <Alert condition={showAlert} message={'User with same email exist. Try change email.'}/>
            <form method="post" onSubmit={handleSubmit}>
                <div className={'row'}>
                    <div className={'column'}>
                        <InputField type={'text'} value={name} handler={handleNameChange} label={'Name'}/>
                        <ErrorMessage message={nameErrorMessage}/>
                        <InputField type={'password'} value={password} handler={handlePasswordChange}
                                    label={'Password'}/>
                        <ErrorMessage message={passwordErrorMessage}/>
                    </div>
                    <div className={'column'}>
                        <InputField type={'email'} value={email} handler={handleEmailChange} label={'Email'}/>
                        <ErrorMessage message={emailErrorMessage}/>
                        <InputField type={'password'} value={repeatPassword} handler={handleRepeatPasswordChange}
                                    label={'Repeat Password'}/>
                        <ErrorMessage message={repeatPasswordErrorMessage}/>
                    </div>
                    <ErrorMessage message={equalsPasswordsErrorMessage}/>
                </div>
                <div className={'buttons-column'}>
                    <div className={'button'}>
                        <button type="button" className={'cancel-button'} onClick={() => navigate(-1)}>Back</button>
                    </div>
                    <div className={'button'}><input className={'register-button'} type="submit" value={'Register'}/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;