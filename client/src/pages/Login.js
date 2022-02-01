import React from 'react';


function LoginForm() {
    return (
        <>
            <div className='field'>
                <label className='label' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Email</label>
                <div className='control' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <input className='input is-small' style={inputStyle} type='email'></input>
                </div>
                <p className='help is-danger' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>This email is invalid!</p>
            </div>

            <div className="field">
                <label className="label" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Password</label>
                <div className="control" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <input className="input is-small" style={inputStyle} type="text" ></input>
                </div>
                <p className='help is-danger' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>This password is invalid!</p>
                <div className='buttons' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button className='button is-info is-light is-small' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Login</button>
                </div>
            </div>
        </>
    )
};

export default LoginForm;