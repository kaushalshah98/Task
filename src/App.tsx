import '@tailwindcss/ui/dist/tailwind-ui.css';
import React, { useState } from 'react';
import ReactNotification from 'react-notifications-component';
import 'react-pro-sidebar/dist/css/styles.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Authentication from './components/Auth/Authentication';
import { Login } from './components/Auth/Login';
import Registration from './components/Auth/Registration';
import Dashboard from './components/Dashboard/Dashboard';
import './css/fonts.css';
import './css/style.css';

const App = (props: any) => {
  let [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <ReactNotification />
      <Router>
        {/*  <Provider /> */}

        <Route exact path="/login">
          <Login isAuth={isAuth} setIsAuth={setIsAuth} />
        </Route>
        <Redirect exact from="/" to="dashboard" />
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Authentication path="/dashboard" component={Dashboard} isAuth={true} />
      </Router>
    </>
  );
};

export default App;
