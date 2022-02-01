import React, { useState } from 'react';
import Modal from './components/Modal';


const App = () => {

  const [modalSelected, setModalselected] = useState(false)

  return (
    <> 
      <div>
        <p>Here we go</p>
        <button className='are-small is-rounded' onClick={() => setModalselected(true)}>Open modal</button>
        {modalSelected.toString()}
      </div>
        {modalSelected ? <Modal email="giovanny@gmail.com" password="******" onClose={() => setModalselected(false)} /> : <></>}
    </>
  );
}


export default App;
