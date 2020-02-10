import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// actions
import { createTicket, getTickets } from "actions/ticket";

// material ui component
import { Grid, Button, withStyles } from "@material-ui/core";
import TicketCard from "components/Ticket/TicketCard";

// styles
const styles = theme => ({
  root: {
    padding: 50
  }
});

const Body = props => {
  const history = useHistory();

  useEffect(() => {
    props.getTickets();
  }, []);

  const newIssue = () => {
    history.push("/tickets/new");
  };

  const { classes, tickets } = props;

  return (
    <React.Fragment>
      <Grid container direction="column" className={classes.root} spacing={10}>
        <Grid item>
          <Grid container justify="flex-end">
            <Button onClick={newIssue}>New Issue</Button>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={5}>
            {tickets.map(ticket => (
              <TicketCard
                title={ticket.title}
                tags={ticket.tags}
                priority={ticket.priority}
                users={ticket.user}
              />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  tickets: state.ticket.all
});

export default withStyles(styles)(
  connect(mapStateToProps, { createTicket, getTickets })(Body)
);
