import React, { useState, useEffect } from 'react';
// import { Redirect } from 'react-router-dom';

function Users() {
  // const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const [allUsers, setAllUsers] = useState([]);
  const url = "http://localhost:3000/api/v1/users"
  
  useEffect(() => {
    if (localStorage.getItem('access_token')) fetch(url, {
      method: 'GET',
      headers:{ 
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      }
    })
    .then(res => res.json())
    .then(response => {
        if (response.status !== 403) setAllUsers(response.result)
    })
    .catch(error => {
        console.error('Error:', error)
        // setRedirectToReferrer(true);
    });
  })

  // if (redirectToReferrer) {
  //   return (
  //     <Redirect to="/"/>
  //   )
  // }

  return (
    <>
      {allUsers.length > 0 &&
        <div>
          <p>All users</p>
          <ul>
            {allUsers.map((user, i) => <li key={i}>Username: ${user.name}</li>)}
          </ul>
        </div> 
      }
      {allUsers.length === 0 && <p>Access denied</p>}
    </>
  );
}

export default Users;
