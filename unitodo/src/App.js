import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Layout from './hoc/layout/Layout';
import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUp';
import Todos from './containers/Todos/Todos';
import Logout from './containers/Auth/Logout/Logout';
const App = (loggedIn) => {
  let routes;
  if (loggedIn.loggedIn) {
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
  loggedIn : firebase.auth.uid ? true:null,
})

export default connect(mapStateToProps)(App);