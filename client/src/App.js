import React, { useState } from 'react';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';

function App() {
  const [signUpFormselected, setSignupFormselected] = useState(false)
  const [loginFormselected, setLoginFormselected] = useState(false)

  return (
    <div className='center'>
      <Navbar
        setSignupFormselected={setSignupFormselected}
        setLoginFormselected={setLoginFormselected}
      >
      </Navbar>
      <main>
        {signUpFormselected ? (
          <>
            <SignupForm></SignupForm>
          </>
        ) : loginFormselected ? (
          <>
            <LoginForm></LoginForm>
          </>
        ): <></> }
      </main>
    </div>
  )
}


export default App;
