import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthFormComponent, SpinnerComponent } from '../../components';
import { UserService } from '../../services/user.service';
import { signInFormItems, signInButton } from '../../config/sign-in.config';
import { isPayloadValid } from '../../utils/payload-valid.util';

export const SignInPageComponent = () => {
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
        try {
            event.preventDefault();
            setLoading(true);

            const isValid = isPayloadValid(signInFormItems, user);
            if (!user || !user.password || !user.username) {
                setError('Form is not valid');
                setLoading(false);
            }
            
            const response = await userService.signIn(user);
            console.log(response);
            if (!response || !response.result || !response.result.token) {
                setError(response.message);
                setLoading(false);
                return;
            }
            
            setError('');
            setLoading(false);
            localStorage.setItem('token', response.result.token);
            setTimeout(() => history.push('/search'), 1000);
        } catch (ex: any) {
            setError(ex?.message);
            setLoading(false);
        }
    }

    return (
        <div className="page">
            <>
                <h2>Sign In</h2>
                {
                    loading && (<SpinnerComponent />)
                }
                {
                    !loading && (<AuthFormComponent formItems={[...signInFormItems, signInButton ]} handleSubmit={handleSubmit} handleChange={handleChange}></AuthFormComponent>)
                }
                {
                    error && <p className='text-danger'>{error}</p>
                }                
            </>
        </div>
    );
};