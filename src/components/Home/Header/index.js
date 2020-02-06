import React from "react";

// material ui components
import { Grid, withStyles, Typography } from "@material-ui/core";
import BugReportOutlinedIcon from "@material-ui/icons/BugReportOutlined";

const styles = theme => ({
  root: {
    padding: 20
  },
  logoText: {
    fontSize: 25
  }
});

const Header = ({ classes }) => {
  return (
    <React.Fragment>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>
          <Grid container alignItems="center">
            <BugReportOutlinedIcon />{" "}
            <Typography
              variant="h1"
              display="inline"
              className={classes.logoText}
            >
              Simple Issue Tracker
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(Header);
