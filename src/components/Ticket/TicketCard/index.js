import React from "react";

// material ui components
import { Typography, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: 20,
    border: "3px solid black"
  }
});

const TicketCard = ({ title, priority, tags, users, classes }) => {
  const classse = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={12} sm={2} md={4}>
        <Grid container direction="column">
          <Grid item>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="h5" component="h2">
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography>{priority}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {tags.map(tag => (
              <span>tag</span>
            ))}
          </Grid>
          <Grid item>
            <Typography>
              {users.map(user => (
                <span>user</span>
              ))}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default TicketCard;
