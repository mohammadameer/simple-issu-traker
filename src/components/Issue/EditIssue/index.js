/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

// material ui
import {
  Grid,
  Typography,
  makeStyles,
  IconButton,
  Button,
  MenuItem
} from "@material-ui/core";
import { KeyboardBackspace } from "@material-ui/icons";

// actions
import { updateIssue, getIssue } from "actions/issue";

// our components
import TextField from "components/form/TextField";
import MultipleSelect from "components/form/MultipleSelect";
import Select from "components/form/Select";

// redux
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    padding: 50
  }
});

const NewIssue = props => {
  const classes = useStyles();

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    props.getIssue(id);
  }, []);

  const goBack = () => history.replace("/");

  const submit = values => {
    props.updateIssue(id, values);
    return { history, id };
  };

  const { handleSubmit, pristine, submitting } = props;

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12} md={8} lg={7}>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h4">New Issue</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={goBack}>
              <KeyboardBackspace fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={8} lg={7}>
        <form onSubmit={handleSubmit(submit)}>
          <Grid container spacing={5} direction="column">
            {/* the issue title */}
            <Grid item>
              <Field
                name="title"
                label="title"
                fullWidth
                component={TextField}
              />
            </Grid>
            {/* the issue body */}
            <Grid item>
              <Field
                name="body"
                label="body"
                fullWidth
                multiline
                rows={2}
                component={TextField}
              />
            </Grid>
            {/* tags and assigned user for the issue */}
            <Grid item>
              <Grid container justify="space-between" spacing={5}>
                {/* tags */}
                <Grid item xs={12} sm={6}>
                  <Field
                    name="tags"
                    label="tags"
                    fullWidth
                    format={value => (Array.isArray(value) ? value : [])}
                    component={MultipleSelect}
                  >
                    <MenuItem value="frontend_bug">FrontEnd bug</MenuItem>
                    <MenuItem value="backend_bug">BackEnd bug</MenuItem>
                  </Field>
                </Grid>
                {/* user */}
                <Grid item xs={12} sm={6}>
                  <Field
                    name="users"
                    label="users"
                    fullWidth
                    format={value => (Array.isArray(value) ? value : [])}
                    component={MultipleSelect}
                  >
                    <MenuItem value="mohammad ameer">mohammad ameer</MenuItem>
                    <MenuItem value="ahmad alhawas">ahmad alhawas</MenuItem>
                    <MenuItem value="sa3ad alahmari">sa3ad alahmari</MenuItem>
                  </Field>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container justify="space-between" spacing={5}>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="priority"
                    label="priority"
                    fullWidth
                    component={Select}
                  >
                    <MenuItem value="low">Low</MenuItem>
                    <MenuItem value="normal">Normal</MenuItem>
                    <MenuItem value="urgent">Urgent</MenuItem>
                  </Field>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="status"
                    label="status"
                    fullWidth
                    component={Select}
                  >
                    <MenuItem value="todo">To Do</MenuItem>
                    <MenuItem value="in_progress">In Progress</MenuItem>
                    <MenuItem value="done">Done</MenuItem>
                  </Field>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Field
                name="newUpdate"
                label="update"
                fullWidth
                multiline
                rows={2}
                component={TextField}
              />
            </Grid>
            <Grid item>
              <Grid container justify="center">
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  disabled={pristine || submitting}
                  type="submit"
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

const validate = values => {
  const errors = {};
  const fields = ["title", "body", "user", "priority"];

  fields.forEach(field => {
    if (!values[field]) errors[field] = "Required !!";
  });

  if (!(values["tags"] && values["tags"].length > 0))
    errors["tags"] = "Required !!";

  return errors;
};

const mapStateToProps = state => ({
  initialValues: state.issues.activeIssue
});

export default connect(mapStateToProps, { updateIssue, getIssue })(
  reduxForm({
    form: "editIssue",
    validate,
    enableReinitialize: true,
    onSubmitSuccess: ({ history, id }, dispatch) => {
      history.replace(`/issues/${id}`);
    }
  })(NewIssue)
);
