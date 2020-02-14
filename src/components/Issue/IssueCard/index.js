import React, { useState } from "react";

// material ui components
import { Typography, Grid, makeStyles, Checkbox } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: 20,
    border: "3px solid #eee",
    borderRadius: 5,
    position: "relative",
    "&:hover": {
      backgroundColor: "#d5d5d5",
      "& $checkbox": {
        display: "block"
      }
    }
  },
  tag: {
    backgroundColor: "#eee",
    padding: 5,
    borderRadius: 5,
    marginRight: 10
  },
  user: {
    backgroundColor: "#eee",
    padding: 5,
    borderRadius: 5,
    marginRight: 10
  },
  checkbox: {
    position: "absolute",
    right: -10,
    top: -10,
    display: "none"
  }
});

const IssueCard = ({
  id,
  title,
  priority,
  tags,
  users,
  checkIssue,
  unCheckIssue
}) => {
  const [checked, setChecked] = useState(false);
  const classes = useStyles();

  const getStyle = tag => {
    const style = {
      padding: 5,
      marginRight: 5,
      borderRadius: 5,
      color: "#fff",
      textAlign: "center"
    };

    if (tag === "low") {
      style.backgroundColor = "#2c80d3";
    } else if (tag === "normal") {
      style.backgroundColor = "#2cd362";
    } else if (tag === "urgent") {
      style.backgroundColor = "#d32c4f";
    }

    return style;
  };

  const handleCheckbox = () => {
    if (checked) {
      unCheckIssue(id);
    } else {
      checkIssue(id);
    }
    setChecked(!checked);
  };

  return (
    <Grid item xs={12} sm={5} md={4}>
      <Grid
        container
        spacing={2}
        style={checked ? { backgroundColor: "#d5d5d5" } : {}}
        className={classes.root}
      >
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={9} sm={9} md={10}>
              <Typography variant="h5" component="h2">
                {title}
              </Typography>
            </Grid>
            <Grid item xs={3} sm={3} md={2}>
              <Typography style={getStyle(priority)}>{priority}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {tags.map(tag => (
            <span className={classes.tag}>{tag}</span>
          ))}
        </Grid>
        <Grid item container justify="flex-end" xs={6}>
          <Typography>
            <span className={classes.user}>{users[0]}</span>
            {users.length > 1 && <span className={classes.user}>...</span>}
          </Typography>
        </Grid>
        <Checkbox
          style={checked ? { display: "block" } : {}}
          checked={checked}
          onChange={handleCheckbox}
          className={classes.checkbox}
        />
      </Grid>
    </Grid>
  );
};

export default IssueCard;
