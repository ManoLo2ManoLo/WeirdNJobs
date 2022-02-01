import React from 'react';


function Signup() {
  return (
    <>
      <div className='field'>
        <label className='label' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>First Name</label>
        <div className='control' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input className='input is-small' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%' }} type='text' ></input>
        </div>
      </div>
      <div className='field'>
        <label className='label' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Last Name</label>
        <div className='control' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input className='input is-small' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%' }} type='text' ></input>
        </div>
      </div>
      <div className='field'>
        <label className='label' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Username</label>
        <div className='control' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input className='input is-small' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%' }} type='text' ></input>
        </div>
      </div>
      <div className='field'>
        <label className='label' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Email</label>
        <div className='control' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input className='input is-small' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%' }} type='email' ></input>
        </div>
        <p className='help is-danger' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>This email is invalid!</p>
      </div>

      <div className="field">
        <label className="label" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Password</label>
        <div className="control" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input className="input is-small" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%' }} type="text"></input>
        </div>
      </div>
      <div classname='field'>
        <label className='label' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Verify Password</label>
        <div className='control' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <input className='input is-small' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%' }} type='email' ></input>
        </div>
        <p className='help is-danger' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>This Password is invalid!</p>
      </div>
      <div className='field'>
        <label className='label' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Choose county!</label>
        <div className='control' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className='select is-small' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <select style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
            <input type='checkbox' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}></input>
            I agree to the <a href='#terms'>terms and conditions.</a>
          </label>
        </div>
      </div>
      <div className='buttons' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button className='button is-info is-light is-small'>Sign-Up</button>
      </div>
    </>

  )
};

export default Signup;