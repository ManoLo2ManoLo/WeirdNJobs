import React from 'react';

function Modal(props) {
    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content has-background-white">
                <div className='field'>
                    <label className='field'>Email</label>
                    <div className='control has-icons-left has-icons-right'>
                        <input className='input is-small' type='email' value={props.email}></input>
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
                        <input className="input is-danger is-small" type="password" value={props.password}></input>
                        <span className="icon is-small is-left">
                            <i className="fas fa-info-circle"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </div>
                </div>

            </div>
            <button className="modal-close is-small" aria-label="close" onClick={props.onClose}></button>
        </div>
    )
};


export default Modal;