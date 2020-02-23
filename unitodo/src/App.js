import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Layout from './hoc/layout/Layout';
import Home from './containers/Home/Home';
import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUp';
import Todos from './containers/Todos/Todos';

const App = () => {
  return (
    <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todos" component={Todos} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Layout>
    </Router>
  );
};

export default App;