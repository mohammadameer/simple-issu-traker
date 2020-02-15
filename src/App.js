import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";

// our components
import HomeHeader from "components/Home/Header";
import Issue from "components/Issue/Issue";

// material ui font
import "typeface-roboto";
import NewIssue from "components/Issue/NewIssue";
import EditIssue from "components/Issue/EditIssue";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomeHeader />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/issues/new">
            <NewIssue />
          </Route>
          <Route exact path="/issues/:id">
            <Issue />
          </Route>
          <Route exact path="/issues/edit/:id">
            <EditIssue />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
