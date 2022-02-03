import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';

const Modal =({ onClose }) => {
    const [ formState, setFormState ] = useState({ profileImage: '' });
    const [ updateUser ] = useMutation(UPDATE_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value
        });
    };

    console.log(formState.profileImage)

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await updateUser({
                variables: {
                    profileImage: formState.profileImage
                }
            })

            window.location.reload();
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className='modalBackdrop'>
            <div className='modalContainer'>
                <form className ='box flex-column center' onSubmit={handleFormSubmit}>
                    <p className='modalTitle'>Upload your Profile Picture</p>
                    <input 
                        type='file' 
                        name='profileImage'
                        className='box button button-color' 
                        accept='.png, .jpg, .jpeg' 
                        onChange={handleChange}/>
                    <button type='submit' className='box button button-color'>Submit</button>
                    <button type='button' onClick={onClose} className='box button button-color'>Close</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;