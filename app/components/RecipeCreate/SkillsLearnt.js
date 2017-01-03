import React, {Component} from 'react'
import {Field} from 'redux-form'
import CustomInput from './CustomInput'
import {required} from './validations'
import {connect} from 'react-redux'
import {getSelectOptions} from '../../utils/form'

@connect((state) => {
  console.log(state.skilsLearnt)
  return {skillsLearntOptions: getSelectOptions(state.skilsLearnt, '_id')}
})
export default class SkillsLearnt extends Component {
  componentDidMount() {
    const {fields} = this.props
    if (fields.length === 0) {
      fields.push({})
    }
  }
  render() {
    const {fields, skillsLearntOptions} = this.props
    return (
      <div>
        <p>Skills Learnt </p>
        <ol className='list'>
          {fields.map((skill, index) => {
            return (
              <li className='row' key={index} style={{paddingBottom: 10}}>
                <Field
                  name={`${skill}.name`}
                  className='col-xs-10'
                  component={CustomInput}
                  type='select'
                  placeholder='skill (e.g. grill a fish)'
                  options={skillsLearntOptions}
                  validate={required} />
                <div className='col-xs-2'>
                  <a onClick={() => fields.remove(index)}>Remove</a>
                </div>
              </li>
            )
          })}
        </ol>
        <div>
          <a onClick={() => fields.push({}) }>Add skill learnt</a>
        </div>
      </div>
    )
  }
}
