import React, {Component} from 'react'
import {Field} from 'redux-form'
import CustomInput from './CustomInput'
import {required} from './validations'
import {connect} from 'react-redux'
import {getSelectOptions} from '../../utils/form'

@connect((state) => {
  console.log(state.equipment)
  return {equipmentOptions: getSelectOptions(state.equipment, '_id')}
})
export default class Equipment extends Component {
  componentDidMount() {
    const {fields} = this.props
    if (fields.length === 0) {
      fields.push({})
    }
  }
  render() {
    const {fields, equipmentOptions} = this.props
    return (
      <div>
        <p>Equipment </p>
        <ol className='form-group col-md-12'>
          {fields.map((equipment, index) => {
            return (
              <li key={index} style={{paddingBottom: 10}}>
                <div className='form-inline'>
                  <Field
                    name={`${equipment}.equipment`}
                    component={CustomInput}
                    type='select'
                    placeholder='equipment (e.g. pan)'
                    options={equipmentOptions}
                    validate={required} />
                  <Field
                    name={`${equipment}.quantity`}
                    component={CustomInput}
                    placeholder='Quantity equipment (e.g. 2)'
                    type='text'
                    validate={required} />
                  <a onClick={() => fields.remove(index)}>Remove</a>
                </div>
             </li>
            )
          })}
          <a onClick={() => fields.push({}) }>Add equipment</a>
        </ol>
      </div>
    )
  }
}
