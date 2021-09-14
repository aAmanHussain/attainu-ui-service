import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom';

import './App.css';
import { SignUpPageComponent, SignInPageComponent, SearchPageComponent, NotFoundPageComponent} from './pages';
import { HeaderComponent, FooterComponent } from './components';
import { isLoggedIn } from './utils/is-logged-in.util';

function App() {
  const loggedIn = isLoggedIn();
    
  return (
    <Router>
      <HeaderComponent loggedIn={loggedIn}></HeaderComponent>

      <main>
        <Switch>
            <Route path='/sign-up'>
              <SignUpPageComponent></SignUpPageComponent>
            </Route>
            <Route path='/sign-in'>
              <SignInPageComponent></SignInPageComponent>
            </Route>
            <Route path='/search'>
              <SearchPageComponent></SearchPageComponent>
            </Route>
            <Route path='/not-found'>
              <NotFoundPageComponent></NotFoundPageComponent>
            </Route>
            <Route path='/' exact>
              <Redirect to='/sign-in' push />
            </Route>
            <Route path='/**'>
              <Redirect to='/not-found' push />
            </Route>
          </Switch>
      </main>
        
      <FooterComponent></FooterComponent>
    </Router>
  );
}

export default App;
