import React, { useState } from 'react';
import Auth from '../utils/auth';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations'

function Signup() {
  const [formState, setFormState] = useState({ firstName: '', lastName: '', username: '', email: '', password: '', verify: '', county: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    if (formState.firstName && formState.lastName && formState.username && formState.email && 
    formState.password && formState.verify && formState.county && formState.password === formState.verify) {
      event.preventDefault();

      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
          username: formState.username,
          county: formState.county
        }
      });

      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='field'>
        <label className='label' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>First Name</label>
        <div className='control' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input className='input is-small' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%' }} type='text' onChange={handleChange}></input>
        </div>
      </div>
      <div className='field'>
        <label className='label' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Last Name</label>
        <div className='control' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input className='input is-small' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%' }} type='text' onChange={handleChange}></input>
        </div>
      </div>
      <div className='field'>
        <label className='label' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Username</label>
        <div className='control' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input className='input is-small' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%' }} type='text' onChange={handleChange}></input>
        </div>
      </div>
      <div className='field'>
        <label className='label' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Email</label>
        <div className='control' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input className='input is-small' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%' }} type='email' onChange={handleChange}></input>
        </div>
        <p className='help is-danger' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>This email is invalid!</p>
      </div>

      <div className="field">
        <label className="label" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Password</label>
        <div className="control" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input className="input is-small" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%' }} type="text" onChange={handleChange}></input>
        </div>
      </div>
      <div classname='field'>
        <label className='label' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Verify Password</label>
        <div className='control' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input className='input is-small' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%' }} type='email' onChange={handleChange}></input>
        </div>
        <p className='help is-danger' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>This Password is invalid!</p>
      </div>
      <div className='field'>
        <label className='label' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Choose county!</label>
        <div className='control' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className='select is-small' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <select style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onChange={handleChange}>
              <option>Atlantic</option>
              <option>Bergen</option>
              <option>Burlington</option>
              <option>Camden</option>
              <option>Cape May</option>
              <option>Cumberland</option>
              <option>Essex</option>
              <option>Gloucester</option>
              <option>Hudson</option>
              <option>Hunterdon</option>
              <option>Mercer</option>
              <option>Middlesex</option>
              <option>Monmouth</option>
              <option>Morris</option>
              <option>Ocean</option>
              <option>Passaic</option>
              <option>Salem</option>
              <option>Somerset</option>
              <option>Sussex</option>
              <option>Union</option>
              <option>Warren</option>
            </select>
          </div>
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <label className='checkbox' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <input type='checkbox' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onChange={handleChange}></input>
            I agree to the <a href='#terms'>terms and conditions.</a>
          </label>
        </div>
      </div>
      <div className='buttons' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button type='submit' className='button is-info is-light is-small'>Sign-Up</button>
      </div>
    </form>

  )
};

export default Signup;