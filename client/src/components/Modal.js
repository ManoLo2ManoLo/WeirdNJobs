import React from 'react';

function Modal(props) {
    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content has-background-white">

            </div>
            <button className="modal-close is-small" aria-label="close" onClick={props.onClose}></button>
        </div>
    )
};


export default Modal;