import React from 'react';
import Login from './login';
import Register from './register';
import Hello from './hello';
import Users from './users';
import { Route, Switch, Redirect } from 'react-router-dom';

function Main({ toggleLogIn }) {

  const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => 
      localStorage.getItem("access_token") ? 
        <Component {...props} /> :
        <Redirect to="/login" />
    }/>
  )

  return (
    <Switch>
      <Route path="/login" render={(props) => <Login {...props} toggleLogIn={toggleLogIn} />} />
      <Route path="/register" component={Register} />
      <Route path="/users" component={Users} />
      <PrivateRoute path="/" component={Hello} />
    </Switch>
  );
}

export default Main;
