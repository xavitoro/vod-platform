import React, {Component} from 'react'
import {Field} from 'redux-form'
import CustomInput from './CustomInput'
import {required} from './validations'

export default class Steps extends Component {
  componentDidMount() {
    const {fields} = this.props
    if (fields.length === 0) {
      fields.push({})
    }
  }
  render() {
    const {fields} = this.props
    return (
      <div>
        <p>Steps</p>
        <ul className='form-group col-md-12' style={{ listStyleType: 'none' }} >
          {fields.map((step, index) => {
            return (
              <li key={index} style={{paddingBottom: 10}}>
                <div className=''>
                  <div className='clearfix'>
                    <div>Step {index + 1}</div>
                    <div className='pull-right'><a onClick={() => fields.remove(index)}>Remove</a></div>
                  </div>
                  <Field
                    name={`${step}.picture`}
                    component={CustomInput}
                    placeholder='Picture URL'
                    type='text'
                    validate={required} />
                  <Field
                    name={`${step}.description`}
                    component={CustomInput}
                    placeholder='Description'
                    type='text'
                    validate={required} />
                  <Field
                    name={`${step}.tip`}
                    component={CustomInput}
                    placeholder='Tip'
                    type='text'
                    validate={required} />
                </div>
             </li>
            )
          })}
          <a onClick={() => fields.push({}) }>Add step</a>
        </ul>
      </div>
    )
  }
}
