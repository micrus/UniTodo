import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import VerifyEmail from './containers/Auth/VerifyEmail/VerifyEmail'
import Layout from './hoc/layout/Layout';
import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUp';
import Todos from './containers/Todos/Todos';
import Logout from './containers/Auth/Logout/Logout';
import RecoverPassword from './containers/Auth/RecoverPassword/RecoverPassword';

const App = (loggedIn, emailVerified) => {
  let routes;

  if (loggedIn.loggedIn && !emailVerified.emailVerified) {
    routes = (
      <Switch>
        <Route exact path='/verify-email' component={VerifyEmail} />
        <Route exact path='/logout' component={Logout} />
        <Redirect to="/verify-email" />
      </Switch>
    )

  } else if (loggedIn.loggedIn && emailVerified.emailVerified) {
    routes = (      
      <Switch>
        <Route exact path="/" component={Todos} />
        <Route exact path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/recover" component={RecoverPassword} />
        <Redirect to="/login" />
      </Switch>
    );
  }


  return (
    <Router>
    <Layout>
      {routes}
    </Layout>
    </Router>
  );
};

const mapStateToProps = ({firebase}) => ({
  loggedIn : firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified
})

export default connect(mapStateToProps)(App);