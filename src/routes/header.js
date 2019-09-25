import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

function Header({ toggleLogOut, isLoggedIn }) {

  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    toggleLogOut();
  }

  return (
    <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
        {isLoggedIn && <li><a><button onClick={handleLogOut}>Log Out</button></a></li>}
      </ul>
    </nav>
  </header>
  );
}

export default Header;
