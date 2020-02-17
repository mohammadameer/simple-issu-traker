/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  IconButton,
  Button
} from "@material-ui/core";
import { useHistory, useParams, Link } from "react-router-dom";

// material ui
import { KeyboardBackspace } from "@material-ui/icons";
import { getIssue } from "actions/issue";

// utils
import getStyles from "utils/getStyles";
import getTime from "utils/getTime";

// redux
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    padding: 50,
    maxWidth: "100%"
  },
  chip: {
    backgroundColor: "#424242",
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
    color: "#fff"
  },
  created: {
    color: "#777"
  },
  update: {
    padding: 10,
    borderBottom: "1px solid #eee"
  }
});

const Issue = props => {
  const classes = useStyles();

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    props.getIssue(id);
  }, []);

  const goBack = () => history.replace("/");

  const { issue } = props;

  return (
    <Grid container justify="center" spacing={5} className={classes.root}>
      <Grid item xs={12} md={8} lg={7}>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Typography variant="h4">
              Issue #{issue && (issue.id || issue._id)}
            </Typography>
            <span className={classes.created}>
              {issue && getTime(issue.created)}
            </span>
          </Grid>
          <Grid item>
            <IconButton onClick={goBack}>
              <KeyboardBackspace fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={8} lg={7}>
        <Grid container spacing={5}>
          {/* the issue title */}
          <Grid item xs={12} sm={8}>
            <Typography variant="h4">
              {issue && `Title: ${issue.title}`}
            </Typography>
          </Grid>
          {/* issue priority */}
          <Grid item xs={12} sm={4}>
            <Typography style={issue ? getStyles(issue.priority) : {}}>
              {issue && issue.priority}
            </Typography>
          </Grid>
          {/* the issue body */}
          <Grid item xs={12}>
            <Typography>{issue && `Body: ${issue.body}`}</Typography>
          </Grid>
          {/* issue Status */}
          <Grid item xs={12}>
            <Typography>{issue && `Status: ${issue.status}`}</Typography>
          </Grid>
          {/* tags and assigned user for the issue */}
          <Grid item>
            <Grid container justify="space-between" spacing={5}>
              {/* tags */}
              <Grid item xs={12}>
                <Typography>
                  {issue && (
                    <React.Fragment>
                      Tags:{" "}
                      {issue.tags.map(tag => (
                        <span key={tag} className={classes.chip}>
                          {tag}
                        </span>
                      ))}
                    </React.Fragment>
                  )}
                </Typography>
              </Grid>
              {/* user */}
              <Grid item xs={12}>
                <Typography>
                  {issue && (
                    <React.Fragment>
                      Users:{" "}
                      {issue.users.map(user => (
                        <span key={user} className={classes.chip}>
                          {user}
                        </span>
                      ))}
                    </React.Fragment>
                  )}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction="column">
              {issue && (
                <React.Fragment>
                  Updates:{" "}
                  {issue.updates.map((update, index) => (
                    <Grid item className={classes.update}>
                      {`${index + 1}: ${getTime(update.date)} -----> ${
                        update.update
                      }`}
                    </Grid>
                  ))}
                </React.Fragment>
              )}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container justify="center">
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to={`/issues/edit/${id}`}
                fullWidth
              >
                Update
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  issue: state.issues.activeIssue
});

export default connect(mapStateToProps, { getIssue })(Issue);
