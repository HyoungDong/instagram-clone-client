/* eslint-disable no-unused-expressions */
// import PropTypes from 'prop-types';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Feed from '../Routes/Feed'
import Authentication from '../Routes/Authentication'

const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Feed} />
  </>
);


const LoggedOutRoutes= () => (
  <>
    <Route exact path="/" component={Authentication} />
  </>
);
type AppProps = {
  isLoggedIn:Boolean;
};
const AppRouter= ({isLoggedIn}:AppProps) => {
  console.log(isLoggedIn);
  return (
    <Router>
      <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
    </Router>
);
}



export default AppRouter;