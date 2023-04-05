// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import Meme from'./assets/image/Meme.png'
import { ReactComponent as IconEdit } from './assets/icon/logo.svg';
function App() {
  return (
    <div className="container">
      <img src={Meme} alt=''/>
      <IconEdit/>
    </div>
  );
}

export default App;
