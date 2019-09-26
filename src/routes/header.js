import React from 'react';
import { Link } from 'react-router-dom';

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
        <li><Link to='/users'>Users</Link></li>
        {!isLoggedIn && <li><Link to='/login'>Login</Link></li>}
        {!isLoggedIn && <li><Link to='/register'>Register</Link></li>}
        {isLoggedIn && <li><button onClick={handleLogOut}>Log Out</button></li>}
      </ul>
    </nav>
  </header>
  );
}

export default Header;
