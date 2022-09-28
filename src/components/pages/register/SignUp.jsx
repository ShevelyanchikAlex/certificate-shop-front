import React from 'react';
import '../../../assets/styles/SignUp.css';
import InputField from "./components/InputField";

const SignUp = () => {
    return (
        <div className="register-container">
            <h1>Register</h1>
            <form method="post">
                <div className={'row'}>
                    <div className={'column'}>
                        <InputField type={'text'} label={'First Name'}/>
                        <InputField type={'password'} label={'Password'}/>
                        <InputField type={'email'} label={'Email'}/>
                    </div>
                    <div className={'column'}>
                        <InputField type={'text'} label={'Last Name'}/>
                        <InputField type={'password'} label={'Repeat Password'}/>
                        <InputField type={'text'} label={'Address'}/>
                    </div>
                </div>
                <div className={'buttons-column'}>
                    <div className={'button'}>
                        <button type="button" className={'cancel-button'} onClick="history.back()">Back</button>
                    </div>
                    <div className={'button'}><input className={'register-button'} type="submit" value={'Register'}/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;