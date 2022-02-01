import React from 'react';


function LoginForm() {
    return (
        <div class="modal">
            <div className="modal-background"></div>
            <div className="modal-content">
            <div className='field'>
            
                <div classname='field'>
                    <label className='field'>Email</label>
                    <div className='control has-icons-left has-icons-right'>
                        <input className='input-is' type='email' placeholder='Input your email here!'></input>
                        <span className='icon is-small is-left'>
                            <i className='fas fa-envelope'></i>
                        </span>
                        <span className='icon is-small is-right'>
                            <i className='fas fa-exclamation-triangle'></i>
                        </span>
                    </div>
                    <p className='help is-danger'>This email is invalid!</p>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-danger" type="text" placeholder="Password goes here!" value="bulma"></input>
                        <span className="icon is-small is-left">
                            <i className="fas fa-info-circle"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </div>
                    <div className='buttons'>
                        <button className='button is-info is-light'>Login</button>
                    </div>
                    
                </div>
        </div>
            </div>
            <button class="modal-close is-small" aria-label="close"></button>
        </div>
    )
};

export default LoginForm;