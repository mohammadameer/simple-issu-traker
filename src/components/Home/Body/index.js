import React, { useEffect } from "react";

// actions
import { createTicket } from "actions/ticket";

// material ui component
import { Grid, Button, withStyles } from "@material-ui/core";
import TicketCard from "components/Ticket/TicketCard";

const styles = theme => ({
  root: {
    padding: 100
  }
});

const Body = ({ classes }) => {
  useEffect(() => {}, []);
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.root} spacing={10}>
        <Grid item>
          <Grid container justify="flex-end">
            <Button>New Issue</Button>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container>
            <TicketCard
              title="get help"
              tags="help"
              priority="first"
              users="mohamamd"
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(Body);
