import React from 'react';


const App = (props) => {


  return (
    <>
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content has-background-white">
          <div className='field'>
            <div className='field'>
              <label className='label'>First Name</label>
              <div className='control'>
                <input className='input is-small' type='text' placeholder='Input your first name here!'></input>
              </div>
            </div>
            <div className='field'>
              <label className='label'>Last Name</label>
              <div className='control'>
                <input className='input is-small' type='text' placeholder='Input your last name here!'></input>
              </div>
            </div>
            <div className='field'>
              <label className='label'>Username</label>
              <div className='control'>
                <input className='input is-small' type='text' placeholder='Input your username here!'></input>
              </div>
            </div>
            <div classname='field'>
              <label className='field'>Email</label>
              <div className='control has-icons-left has-icons-right'>
                <input className='input is-small' type='email' placeholder='Input your email here!'></input>
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
                <input className="input is-small" type="text" placeholder="Password goes here!"></input>
                <span className="icon is-small is-left">
                  <i className="fas fa-info-circle"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Verify your password</label>
              <div className="control has-icons-left has-icons-right">
                <input className="input is-small" type="text" placeholder="Verify your password!"></input>
                <span className="icon is-small is-left">
                  <i className="fas fa-info-circle"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <p className="help is-danger">This password is invalid!</p>
            </div>
            <div className='field'>
              <label className='label'>Choose county!</label>
              <div className='control'>
                <div className='select is-small'>
                  <select>
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
                <label className='checkbox'>
                  <input type='checkbox'></input>
                  I agree to the <a href='#terms'>terms and conditions.</a>
                </label>
              </div>
            </div>
          </div>
          <div className='buttons'>
            <button className='button is-info is-light is-small'>Sign-Up</button>
          </div>
        </div>
        <button className="modal-close is-small" aria-label="close" onClick={props.onClose}></button>
      </div>
    </>
  );
}


export default App;
