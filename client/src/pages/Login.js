import React, { useState } from 'react';
import { useMutation} from "@apollo/client";
import Auth from "../utils/auth"
import { LOGIN_USER } from "../utils/mutations";


function Login() {
    const inputStyle = {
        width : '30%'
    }

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
        <form onSubmit={handleFormSubmit}>
            <div className='field'>
                <label className='label' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Email</label>
                <div className='control' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <input className='input is-small' style={inputStyle} type='email' name='email' id='email' onChange={handleChange}></input>
                </div>
            </div>

            <div className="field">
                <label className="label" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Password</label>
                <div className="control" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <input className="input is-small" style={inputStyle} type="password" name='password' id='password' onChange={handleChange}></input>
                </div>
                {error ? (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <p className="error-text">The email or password is incorrect.</p>
                    </div>
                ) : null}
                <div className='buttons' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button type='submit' className='button is-info is-light is-small' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Login</button>
                </div>
            </div>
        </form>
    )
    
};

export default Login;