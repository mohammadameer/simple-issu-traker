import React, { useState } from "react";

// material ui components
import {
  Grid,
  withStyles,
  Typography,
  IconButton,
  Modal,
  Switch
} from "@material-ui/core";
import BugReportOutlinedIcon from "@material-ui/icons/BugReportOutlined";
import { Settings } from "@material-ui/icons";
import { connect } from "react-redux";

// actions
import { changeMode } from "actions/theme";
import { changeDataSource } from "actions/data";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    padding: 20,
    borderBottom: "3px solid #eee"
  },
  logoText: {
    fontSize: 25
  },
  modal: {
    position: "absolute",
    outline: "none",
    width: 300,
    height: 200,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 5,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate( -50%, -50%)"
  }
});

const Header = props => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  const handeModeChange = () => {
    const mode = props.mode === "light" ? "dark" : "light";
    props.changeMode(mode);
  };

  const handleDataSourceChange = () => {
    const data = props.data === "mock" ? "server" : "mock";
    props.changeDataSource(data);
  };

  const { classes, data, mode } = props;

  return (
    <React.Fragment>
      <Grid
        container
        alignItems="center"
        justify="space-between"
        className={classes.root}
      >
        <Grid item>
          <Link to="/">
            <Grid container alignItems="center">
              <BugReportOutlinedIcon />{" "}
              <Typography variant="h1" className={classes.logoText}>
                Simple Issue Tracker
              </Typography>
            </Grid>
          </Link>
        </Grid>
        <Grid item>
          <IconButton onClick={handleModal}>
            <Settings />
          </IconButton>
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleModal}>
        <Grid container justif="space-between" className={classes.modal}>
          <Grid item xs={12}>
            <Typography>Settings</Typography>
          </Grid>
          <Grid item container alignItems="center" xs={12}>
            <Grid item xs={2}>
              <Typography>Mode:</Typography>
            </Grid>
            <Grid item xs={10} justify="flex-end" alignItems="center" container>
              <Grid item>Light</Grid>
              <Grid item>
                <Switch
                  checked={mode === "dark"}
                  value={mode}
                  onChange={handeModeChange}
                />
              </Grid>
              <Grid item>Dark</Grid>
            </Grid>
          </Grid>
          <Grid item container alignItems="center" xs={12}>
            <Grid item xs={2}>
              <Typography>Data:</Typography>
            </Grid>
            <Grid item xs={10} justify="flex-end" alignItems="center" container>
              <Grid item>Mock</Grid>
              <Grid item>
                <Switch
                  checked={data === "server"}
                  value={data}
                  onChange={handleDataSourceChange}
                />
              </Grid>
              <Grid item>Server</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </React.Fragment>
  );
};

export default connect(
  state => ({
    mode: state.mode,
    data: state.data
  }),
  { changeMode, changeDataSource }
)(withStyles(styles)(Header));
