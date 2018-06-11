import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; //communicate w/ the redux store
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

//SurveyForm shows a form for a user to add input
class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name}) => {
      return (
        <Field key={name} component={SurveyField} type="text" label={label} name={name} />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

// Determine if the form has any invalid input values
function validate(values) {
  const errors = {};

  //validate email format
  errors.recipients = validateEmails(values.recipients || '');

  // missing field values
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

// initialize and configures survey forms
export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
