import React from 'react';
import './css/fonts.css';
import '@tailwindcss/ui/dist/tailwind-ui.css';
import 'react-pro-sidebar/dist/css/styles.css';
import './css/style.css';
import Store from './Store/MobxStore';
import { Login } from './components/Auth/Login';
import ReactNotification from 'react-notifications-component';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Registration from './components/Auth/Registration';
import Dashboard from './components/Dashboard/Dashboard';
import Authentication from './components/Auth/Authentication';
import Controller from './components/Controller/Controller';
import { useState } from 'react';

const App = (props: any) => {
  localStorage.setItem('Email', 'kaushalshah589@gmail.com');
  localStorage.setItem('Password', 'Kaushal@1234');
  //const {isAuth, setIsAuth} = Controller(props);
  //const authProps = {isAuth, setIsAuth}
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
        <Authentication path="/dashboard" component={Dashboard} isAuth={isAuth} />
      </Router>
    </>
  );
};

export default App;
