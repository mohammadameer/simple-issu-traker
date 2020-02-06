import React from "react";

// material ui components
import { Card, CardContent, Typography, withStyles } from "@material-ui/core";

const styles = theme => ({});

const TicketCard = ({ title, priority, tags, users, classes }) => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography>{priority}</Typography>
          <Typography>{tags}</Typography>
          <Typography>{users}</Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default withStyles(styles)(TicketCard);
