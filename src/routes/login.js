import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login({ toggleLogIn }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const handleSubmit = (e) => {
  
    e.preventDefault();

    const url = "http://localhost:3000/api/v1/login"
    let formData = {
      name: login,
      password: password
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    }).then(res => res.json())
    .then(response => {
        if (response.token) {
          localStorage.setItem('access_token', response.token);
          toggleLogIn();
          setRedirectToReferrer(true);
        }
      }
    )
    .catch(error => console.error('Error:', error));
  }

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
    console.log(login);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    console.log(password);

  }

  if (redirectToReferrer) {
    return (
      <Redirect to="/"/>
    )
  }

  return (
    <>
      <p>Please LOGIN!</p>
      <form className="form" onSubmit={handleSubmit}>
      <input name="login" type="text" onChange={handleLoginChange}/>
        <input name="password" type="password" onChange={handlePasswordChange}/>
        <input type="submit" value="Log in!"/>
      </form>
    </>
  );
}

export default Login;
