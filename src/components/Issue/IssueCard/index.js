import React, { useState } from "react";

// material ui components
import {
  Typography,
  Grid,
  makeStyles,
  Checkbox,
  useMediaQuery
} from "@material-ui/core";
import { Link } from "react-router-dom";

// utils
import getStyles from "utils/getStyles";

// styles
const useStyles = makeStyles({
  root: {
    padding: 20,
    border: "3px solid #eee",
    borderRadius: 5,
    position: "relative",
    "&:hover": {
      backgroundColor: "#ababab",
      "& $checkbox": {
        display: "block"
      }
    }
  },
  tag: {
    backgroundColor: "#424242",
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
    color: "#fff"
  },
  user: {
    backgroundColor: "#424242",
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
    color: "#fff"
  },
  checkbox: {
    position: "absolute",
    right: -10,
    top: -10,
    display: "none"
  }
});

const IssueCard = ({ issue, checkIssue, unCheckIssue }) => {
  const matchesSm = useMediaQuery("(min-width:960px)");

  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  const { id, _id, title, tags, priority, users } = issue;

  const handleCheckbox = e => {
    e.stopPropagation();
    if (checked) {
      unCheckIssue(id || _id);
    } else {
      checkIssue(id || _id);
    }
    setChecked(!checked);
  };

  return (
    <Grid item xs={12} sm={5} md={4}>
      <Link to={`/issues/${id || _id}`}>
        <Grid
          container
          spacing={2}
          style={checked ? { backgroundColor: "#d5d5d5" } : {}}
          justify="flex-start"
          className={classes.root}
        >
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={9} sm={9} md={10}>
                <Typography variant="h5">{title}</Typography>
              </Grid>
              <Grid item xs={3} sm={3} md={2}>
                <Typography style={getStyles(priority)}>{priority}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {tags.map(tag => (
              <Typography component="span" key={tag} className={classes.tag}>
                {tag}
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <span className={classes.user}>{users[0]}</span>
              {users.length > 1 && <span className={classes.user}>...</span>}
            </Typography>
          </Grid>
          <Checkbox
            style={checked || !matchesSm ? { display: "block" } : {}}
            checked={checked}
            onClick={e => handleCheckbox(e)}
            className={classes.checkbox}
          />
        </Grid>
      </Link>
    </Grid>
  );
};

export default IssueCard;
