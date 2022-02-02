import React, { useState } from 'react';
import Auth from '../utils/auth';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations'

function Signup() {
  const [formState, setFormState] = useState({ firstName: '', lastName: '', username: '', email: '', password: '', verify: '', county: '' });
  const [addUser] = useMutation(ADD_USER);

  const giveCountyAName = (event) => {
    let { value } = event.target
    formState.county = value;
  }

  const handleFormSubmit = async (event) => {
    if (formState.firstName && formState.lastName && formState.username && formState.email && 
    formState.password && formState.verify && formState.password === formState.verify) {
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
    <form onSubmit={handleFormSubmit} className='box my-5'>
      <div className='field'>
        <label className='label flex-center'>First Name</label>
        <div className='control flex-center'>
          <input className='input is-small flex-center width30' type='firstName' name='firstName' id='firstName' onChange={handleChange}></input>
        </div>
      </div>

      <div className='field'>
        <label className='label flex-center'>Last Name</label>
        <div className='control flex-center'>
          <input className='input is-small flex-center width30' type='lastName' name='lastName' id='lastName' onChange={handleChange}></input>
        </div>
      </div>

      <div className='field'>
        <label className='label flex-center'>Username</label>
        <div className='control flex-center'>
          <input className='input is-small flex-center width30' type='username' name='username' id='username' onChange={handleChange}></input>
        </div>
      </div>

      <div className='field'>
        <label className='label flex-center'>Email</label>
        <div className='control flex-center'>
          <input className='input is-small flex-center width30' type='email' name='email' id='email' onChange={handleChange}></input>
        </div>
      </div>

      <div className="field">
        <label className="label flex-center">Password</label>
        <div className="control flex-center">
          <input className="input is-small flex-center width30" type="password" name='password' id='password' onChange={handleChange}></input>
        </div>
      </div>

      <div className='field'>
        <label className='label flex-center'>Verify Password</label>
        <div className='control flex-center'>
          <input className='input is-small flex-center width30' type='password' name='verify' id='verify' onChange={handleChange}></input>
        </div>
      </div>

      <div className='field'>
        <label className='label flex-center'>Choose county!</label>
        <div className='control flex-center'>
          <div className='select is-small flex-centers'>
            <select className='flex-center' onChange={giveCountyAName}>
              <option></option>
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
      <div className='buttons flex-center'>
        <button type='submit' className='button is-info is-light is-small'>Sign-Up</button>
      </div>
    </form>

  )
};

export default Signup;