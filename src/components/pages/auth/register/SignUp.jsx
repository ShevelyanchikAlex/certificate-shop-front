import React from 'react';
import '../../../../assets/styles/SignUp.css';
import InputField from "./components/InputField";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <div className="register-container">
            <h1>Register</h1>
            <form method="post">
                <div className={'row'}>
                    <div className={'column'}>
                        <InputField type={'text'} label={'Name'}/>
                        <InputField type={'password'} label={'Password'}/>
                    </div>
                    <div className={'column'}>
                        <InputField type={'email'} label={'Email'}/>
                        <InputField type={'password'} label={'Repeat Password'}/>
                    </div>
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