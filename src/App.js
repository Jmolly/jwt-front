import React, { useState } from 'react';
import Main from './routes/main';
import Header from './routes/header';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("access_token"));

  const toggleLogIn = () => {
    setIsLoggedIn(true);
  }

  const toggleLogOut = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <Header toggleLogOut={toggleLogOut} isLoggedIn={isLoggedIn}/>
      <Main toggleLogIn={toggleLogIn}/>
    </div>
  );
}

export default App;