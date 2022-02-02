import React, { useState } from 'react';
import { useMutation} from "@apollo/client";
import Auth from "../utils/auth"
import { LOGIN_USER } from "../utils/mutations";


function Login() {
    const [formState, setFormState] = useState({ email: "", password: "" });
    const [login, { error }] = useMutation(LOGIN_USER); 

    const handleFormSubmit = async (event) =>{
        event.preventDefault();

        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password}
            })
            
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    return (
        <form onSubmit={handleFormSubmit} className='box my-5'>
            <div className='field'>
                <label className='label flex-center'>Email</label>
                <div className='control flex-center'>
                    <input className='input is-small width30' type='email' name='email' id='email' onChange={handleChange}></input>
                </div>
            </div>

            <div className="field">
                <label className="label flex-center">Password</label>
                <div className="control flex-center">
                    <input className="input is-small width30" type="password" name='password' id='password' onChange={handleChange}></input>
                </div>
                {error ? (
                    <div className='flex-center'>
                        <p className="error-text">The email or password is incorrect.</p>
                    </div>
                ) : null}
                <div className='buttons flex-center'>
                    <button type='submit' className='button is-info is-light is-small flex-center'>Login</button>
                </div>
            </div>
        </form>
    )
    
};

export default Login;