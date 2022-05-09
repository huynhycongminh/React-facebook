import React from "react";

import {
  BrowserRouter as Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import Sidebar from "./body/menuLeft/sidebar.component";
import Header from "./header/header.component";
import Feed from "./body/middle/feed/feed.component";
import "./index";
import ListFriends from "./body/menuRight/listFriends.component";
const Dashboard = () => {
  const { path } = useRouteMatch();
  console.log(`path`, path);

  return (
    <>
      <Switch>
        <Route>
          <Header />

          <div className="appBody">
            <div className="row body">
              <div className="col-3 menuLeft">
                <Sidebar />
              </div>
              <div className="col-6 contentMiddle">
                <Feed />
              </div>
              <div className="col-3 menuRight ">
                <ListFriends />
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </>
  );
};
export default Dashboard;
