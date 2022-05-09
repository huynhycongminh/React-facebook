import React from "react";
import {
  BrowserRouter as Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import Login from "../components/login/login.component";
import Dashboard from "../components/dashboard";
const Admin = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/login`} component={() => <Login />} />
      <Route path={`${path}/dashboard`} component={() => <Dashboard />} />
    </Switch>
  );
};
export default Admin;
