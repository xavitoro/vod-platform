import React from 'react'
import CustomInput from '../Form/CustomInput'
import {required, email} from '../Form/validations'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import {signUp} from '../../data/auth'
import {browserHistory} from 'react-router'

@reduxForm({
  form: 'signup'
})
export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  submit(values) {
    this.props.dispatch(signUp(values))
      .then(() => {
        browserHistory.push('/')
      })
  }
  render() {
    const {submitting, handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <Field
          name='email'
          component={CustomInput}
          label='E-Mail'
          placeholder='E-Mail'
          type='text'
          validate={[required, email]} />
        <Field
          name='password'
          label='Password'
          component={CustomInput}
          placeholder='Password'
          type='password'
          validate={[required]} />
        <input
          className='btn btn-primary'
          type='submit'
          value='Sign up'
          disabled={submitting}
          onSubmit={handleSubmit(this.submit)} />
      </form>
    )
  }
}
