import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// actions
import { createTicket, getTickets } from "actions/ticket";

// material ui component
import {
  Grid,
  Button,
  makeStyles,
  MenuItem,
  Divider,
  ButtonGroup
} from "@material-ui/core";
import TicketCard from "components/Ticket/TicketCard";
import { FilterList } from "@material-ui/icons";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// our component
import Select from "components/form/Select";
import { createLogger } from "redux-logger";
import filter from "./filter";

// styles
const useStyles = makeStyles({
  root: {
    padding: 50
  },
  filters: {
    padding: 10
  },
  issues: {
    marginTop: 20
  },
  verticalDivider: {
    height: 50
  },
  horizontalDivider: {
    width: "100%"
  }
});

const Body = props => {
  const matchesXs = useMediaQuery("(min-width:600px)");
  const matchesSm = useMediaQuery("(min-width:960px)");
  const matchesXsAndSm = useMediaQuery(
    "(min-width:600px) and (max-width: 960px)"
  );

  const [isFilter, setIsFilter] = useState(true);
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [tags, setTags] = useState("");
  const [timeOrPriority, setTimeOrPriority] = useState("");
  const [ASCOrDESC, setASCOrDESC] = useState("ASC");

  const history = useHistory();

  const classes = useStyles();

  useEffect(() => {
    props.getTickets();
  }, []);

  const newIssue = () => {
    history.push("/tickets/new");
  };

  const reset = () => {
    setStatus("");
    setPriority("");
    setTags("");
    setTimeOrPriority("");
    setASCOrDESC("ASC");
  };

  const { tickets } = props;
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="center"
        className={classes.root}
      >
        {/* new issue button and filter */}
        <Grid item xs={12}>
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Button onClick={() => setIsFilter(!isFilter)}>
                <FilterList />
                Filter
              </Button>
            </Grid>
            {/* new issue button */}
            <Grid item>
              <Button onClick={newIssue}>New Issue</Button>
            </Grid>
          </Grid>
        </Grid>
        {/* filters */}
        {isFilter && (
          <Grid item xs={12} className={classes.filters}>
            <Grid container alignItems="center" spacing={5}>
              <Grid item xs={12} sm={4} md={2}>
                <Select
                  label="status"
                  fullWidth
                  value={status}
                  onChange={e => setStatus(e.target.value)}
                >
                  <MenuItem value="todo">ToDo</MenuItem>
                  <MenuItem value="in_progress">In Progress</MenuItem>
                  <MenuItem value="done">Done</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <Select
                  label="priority"
                  fullWidth
                  value={priority}
                  onChange={e => setPriority(e.target.value)}
                >
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="normal">Normal</MenuItem>
                  <MenuItem value="urgent">Urgent</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <Select
                  label="tags"
                  fullWidth
                  value={tags}
                  onChange={e => setTags(e.target.value)}
                >
                  <MenuItem value="frontend_bug">FrontEnd Bug</MenuItem>
                  <MenuItem value="backend_bug">Backend Bug</MenuItem>
                </Select>
              </Grid>
              {!matchesXsAndSm && (
                <Divider
                  orientation={matchesXs ? "vertical" : "horizontal"}
                  flexItem
                  className={
                    matchesXs
                      ? classes.verticalDivider
                      : classes.horizontalDivider
                  }
                />
              )}
              <Grid item xs={12} sm={3} md={2}>
                <ButtonGroup>
                  <Button
                    disabled={timeOrPriority === "time"}
                    onClick={() => setTimeOrPriority("time")}
                  >
                    Time
                  </Button>
                  <Button
                    disabled={timeOrPriority === "priority"}
                    onClick={() => setTimeOrPriority("priority")}
                  >
                    Priority
                  </Button>
                </ButtonGroup>
              </Grid>
              {timeOrPriority && (
                <Grid item xs={12} sm={2} md={2}>
                  <ButtonGroup>
                    <Button
                      disabled={ASCOrDESC === "ASC"}
                      onClick={() => setASCOrDESC("ASC")}
                    >
                      ASC
                    </Button>
                    <Button
                      disabled={ASCOrDESC === "DESC"}
                      onClick={() => setASCOrDESC("DESC")}
                    >
                      DESC
                    </Button>
                  </ButtonGroup>
                </Grid>
              )}
              <Grid item xs={12} sm={2} md={1}>
                <Button onClick={reset}>Reset</Button>
              </Grid>
            </Grid>
          </Grid>
        )}
        {/* issues */}
        <Grid item xs={12} className={classes.issues}>
          <Grid
            container
            justify={matchesSm ? "flex-start" : "space-between"}
            spacing={5}
          >
            {filter(
              tickets,
              status,
              priority,
              tags,
              timeOrPriority,
              ASCOrDESC
            ).map(ticket => (
              <TicketCard
                key={ticket.id}
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

export default connect(mapStateToProps, { createTicket, getTickets })(Body);
