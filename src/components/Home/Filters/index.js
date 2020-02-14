import React from "react";

// material ui
import {
  Grid,
  MenuItem,
  ButtonGroup,
  Button,
  Divider
} from "@material-ui/core";

// our component
import Select from "components/form/Select";

const Filters = ({
  classes,
  status,
  setStatus,
  priority,
  setPriority,
  tags,
  setTags,
  matchesXsAndSm,
  matchesXs,
  timeOrPriority,
  setTimeOrPriority,
  ASCOrDESC,
  setASCOrDESC,
  reset
}) => (
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
            matchesXs ? classes.verticalDivider : classes.horizontalDivider
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
);

export default Filters;
