import React, { useState } from 'react';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { UserService } from '../../services/user.service';
import {  isPayloadValid } from '../../utils/payload-valid.util';
import { signUpFormItems, signUpButton } from '../../config/sign-up.config';
import { useHistory } from 'react-router-dom';
import { SpinnerComponent } from '../../components';

export const SignUpPageComponent = () => {
    const userService = new UserService();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [user, setUser]: any = useState({});

    const handleChange = (event: any, key: string) => {
        setError('');
        setUser((prevValue: any) => ({ ...prevValue, [key]: event.target.value }));
    }

    const handleSubmit = async (event: Event) => {
        event.preventDefault();
        setLoading(true);

        const isValid = isPayloadValid(signUpFormItems, user);

        if (!isValid) {
            setError('Form is not valid');
            setLoading(false);
            return;
        }

        const { result, message } = await userService.signUp(user);

        if (!result) {
            setError(message);
        } else {
            setTimeout(() => {
                history.push('/sign-in');
            }, 1000);
        }

        setLoading(false);
    }

    return (
        <div className="page">
            <h2>Sign Up</h2>
            {
                error && (<p className='text-danger'>{error}</p>)
            }
            { loading && (<SpinnerComponent></SpinnerComponent>)}
            { !loading && (<AuthFormComponent formItems={[...signUpFormItems, signUpButton]} handleSubmit={handleSubmit} handleChange={handleChange} />)}
        </div>
    );
};