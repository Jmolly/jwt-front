import React, { useState } from 'react';

function Register() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

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
    .then(response => console.log('Успех:', JSON.stringify(response)))
    .catch(error => console.error('Ошибка:', error));

  }

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
