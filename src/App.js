import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";

// material ui font
import "typeface-roboto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
