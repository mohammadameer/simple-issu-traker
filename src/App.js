import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";

// our components
import HomeHeader from "components/Home/Header";

// material ui font
import "typeface-roboto";
import NewIssue from "components/Issue/NewIssue";

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
