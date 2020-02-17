/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "regenerator-runtime";

// pages
import Home from "./pages/Home";

// our components
import HomeHeader from "components/Home/Header";
import Issue from "components/Issue/Issue";

// material ui font
import {
  makeStyles,
  ThemeProvider,
  CssBaseline,
  createMuiTheme
} from "@material-ui/core";
import NewIssue from "components/Issue/NewIssue";
import EditIssue from "components/Issue/EditIssue";
import { connect } from "react-redux";

// actoins
import { reset } from "actions/reset";
import { getIssue, getIssues } from "actions/issue";

// mock server
import mockServer from "./mock/server";

const useStyles = makeStyles(theme => {
  console.log(theme.palette.type, "type");
  return {
    app: {}
  };
});

function App({ mode, data, reset, getIssue, getIssues }) {
  const classes = useStyles();
  const [server, setServer] = useState(null);

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    if (data === "mock") setServer(mockServer());
    getIssues();
  }, [data]);

  useEffect(() => {
    if (data === "server") {
      server.shutdown();
      reset();
    }
  }, [data]);

  return (
    <div className={classes.app}>
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
    </div>
  );
}

export default connect(
  state => ({
    mode: state.mode,
    data: state.data
  }),
  { reset, getIssue, getIssues }
)(App);
