/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

// actions
import { createIssue, getIssues, removeIssue } from "actions/issue";

// material ui component
import { Grid, Button, makeStyles, useMediaQuery } from "@material-ui/core";
import IssueCard from "components/Issue/IssueCard";
import { FilterList, AddBox, DeleteForever } from "@material-ui/icons";

// our component
import Filters from "components/Home/Filters";
import filter from "utils/filter";

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
  },
  remove: {
    marginRight: 10
  }
});

const Body = props => {
  const matchesXs = useMediaQuery("(min-width:600px)");
  const matchesSm = useMediaQuery("(min-width:960px)");
  const matchesXsAndSm = useMediaQuery(
    "(min-width:600px) and (max-width: 960px)"
  );

  const [isFilter, setIsFilter] = useState(false);
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [tags, setTags] = useState("");
  const [timeOrPriority, setTimeOrPriority] = useState("");
  const [ASCOrDESC, setASCOrDESC] = useState("ASC");
  const [checkedIssues, setCheckedIssues] = useState([]);

  const history = useHistory();

  const classes = useStyles();

  useEffect(() => {
    props.getIssues();
  }, []);

  const newIssue = () => {
    history.push("/issues/new");
  };

  const remove = () => {
    for (let i of checkedIssues) {
      props.removeIssue(i);
    }
    setCheckedIssues([]);
  };

  const reset = () => {
    setStatus("");
    setPriority("");
    setTags("");
    setTimeOrPriority("");
    setASCOrDESC("ASC");
  };

  const checkIssue = id => {
    setCheckedIssues([...checkedIssues, id]);
  };

  const unCheckIssue = id => {
    const filteredIssues = checkedIssues.filter(issue => issue !== id);
    setCheckedIssues(filteredIssues);
  };

  const { issues } = props;
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="center"
        className={classes.root}
      >
        {/* new issue, filter, and remove buttons */}
        <Grid item xs={12}>
          <Grid container alignItems="center" justify="space-between">
            {/* filter button */}
            <Grid item>
              <Button variant="outlined" onClick={() => setIsFilter(!isFilter)}>
                <FilterList />
                Filter
              </Button>
            </Grid>
            {/* new issue and remove button */}
            <Grid item>
              {checkedIssues.length >= 1 && (
                <Button
                  className={classes.remove}
                  variant="outlined"
                  color="secondary"
                  onClick={remove}
                >
                  <DeleteForever />
                  Remove
                </Button>
              )}
              <Button variant="outlined" onClick={newIssue}>
                {" "}
                <AddBox />
                New Issue
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* filters */}
        {isFilter && (
          <Filters
            classes={classes}
            status={status}
            setStatus={setStatus}
            priority={priority}
            setPriority={setPriority}
            tags={tags}
            setTags={setTags}
            timeOrPriority={timeOrPriority}
            setTimeOrPriority={setTimeOrPriority}
            ASCOrDESC={ASCOrDESC}
            setASCOrDESC={setASCOrDESC}
            matchesXs={matchesXs}
            matchesXsAndSm={matchesXsAndSm}
            reset={reset}
          />
        )}
        {/* issues */}
        <Grid item xs={12} className={classes.issues}>
          <Grid
            container
            justify={matchesSm ? "flex-start" : "space-between"}
            spacing={5}
          >
            {issues &&
              filter(
                issues,
                status,
                priority,
                tags,
                timeOrPriority,
                ASCOrDESC
              ).map(issue => (
                <IssueCard
                  key={issue.id || issue._id}
                  issue={issue}
                  checkIssue={checkIssue}
                  unCheckIssue={unCheckIssue}
                />
              ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  issues: state.issues.all
});

export default connect(mapStateToProps, {
  createIssue,
  getIssues,
  removeIssue
})(Body);
