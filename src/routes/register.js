import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Register() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const handleSubmit = (e) => {
  
    e.preventDefault();

    const url = "http://localhost:3000/api/v1/users"
    let formData = {
      name: login,
      password: password
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => {
      console.log('Success:', JSON.stringify(response));
      setRedirectToReferrer(true);
    }
    )
    .catch(error => console.error('Error:', error));

  }

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }  
  
  if (redirectToReferrer) {
    return (
      <Redirect to="/login"/>
    )
  }

  return (
    <>
    <p>Please Register!</p>
      <form className="form" onSubmit={handleSubmit}>
        <input name="login" type="text" onChange={handleLoginChange}/>
        <input name="password" type="password" onChange={handlePasswordChange}/>
        <input type="submit" value="Register!"/>
      </form>
    </>
  );
}

export default Register;
