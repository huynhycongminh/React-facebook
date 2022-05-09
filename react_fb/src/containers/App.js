import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Admin from "../router/index";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <Switch>
        <Route path={""}>
          <Redirect from="/admin/dashboard" to="/admin/login" />
          <Route path="/admin" component={() => <Admin />} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
