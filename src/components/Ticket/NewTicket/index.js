import React, { useState } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  IconButton,
  Button,
  MenuItem
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { reduxForm, Field } from "redux-form";

// material ui
import { KeyboardBackspace } from "@material-ui/icons";
import { createTicket } from "actions/ticket";

// our components
import TextField from "components/form/TextField";
import MultipleSelect from "components/form/MultipleSelect";
import Select from "components/form/Select";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    padding: 50
  }
});

const NewTicket = props => {
  const [tags, setTags] = useState([]);

  const classes = useStyles();

  const history = useHistory();

  const goBack = () => history.goBack();

  const handleTagsChange = e => {
    setTags(e.target.value);
  };

  const submit = values => {
    const data = {
      ...values,
      tags,
      created: new Date()
    };

    props.createTicket(data);
    return history;
  };

  const { handleSubmit, pristine, submitting } = props;

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h4">New Issue</Typography>
          </Grid>
          <Grid item>
            <IconButton>
              <KeyboardBackspace fontSize="large" onClick={goBack} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
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
                rows={4}
                component={TextField}
              />
            </Grid>
            {/* tags and assigned user for the issue */}
            <Grid item>
              <Grid container justify="space-between" spacing={5}>
                {/* tags */}
                <Grid item xs={6}>
                  <Field
                    name="tags"
                    label="tags"
                    fullWidth
                    format={value => (Array.isArray(value) ? value : [])}
                    component={MultipleSelect}
                  >
                    <MenuItem value="FrontEnd bug">FrontEnd bug</MenuItem>
                    <MenuItem value="BackEnd bug">BackEnd bug</MenuItem>
                  </Field>
                </Grid>
                {/* user */}
                <Grid item xs={6}>
                  <Field
                    name="user"
                    label="user"
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
            <Grid item xs={6}>
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
            <Grid item>
              <Grid container justify="center">
                <Button
                  fullWidth
                  disabled={pristine || submitting}
                  type="submit"
                >
                  Submit
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

export default connect(null, { createTicket })(
  reduxForm({
    form: "newIssue",
    validate,
    onSubmitSuccess: (history, dispatch) => {
      history.goBack();
    }
  })(NewTicket)
);
