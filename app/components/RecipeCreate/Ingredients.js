import React, {Component} from 'react'
import {Field} from 'redux-form'
import CustomInput from './CustomInput'
import {required} from './validations'
import {connect} from 'react-redux'
import {getSelectOptions} from '../../utils/form'

@connect((state) => {
  return {ingredientOptions: getSelectOptions(state.ingredients, '_id')}
})
export default class Ingredients extends Component {
  componentDidMount() {
    const {fields} = this.props
    if (fields.length === 0) {
      fields.push({})
    }
  }
  render() {
    const {fields, ingredientOptions} = this.props
    return (
      <div>
        <p>Recipe Ingredients </p>
        <ul className='list'>
          {fields.map((ingredient, index) => {
            return (
              <li key={index} className='row' style={{paddingBottom: 10}}>
                <Field
                  name={`${ingredient}.ingredient`}
                  className='col-xs-3'
                  component={CustomInput}
                  type='select'
                  placeholder='Ingredient (e.g. bread)'
                  options={ingredientOptions}
                  validate={required} />
                <Field
                  name={`${ingredient}.quantity`}
                  className='col-xs-3'
                  component={CustomInput}
                  placeholder='Quantity ingredient (e.g. 2)'
                  type='text'
                  validate={required} />
                <Field
                  name={`${ingredient}.unit`}
                  className='col-xs-3'
                  component={CustomInput}
                  placeholder='Quantity unit (e.g. slice)'
                  type='text'
                  validate={required} />
                <div className='col-xs-3'>
                  <a onClick={() => fields.remove(index)}>Remove</a>
                </div>
              </li>
            )
          })}
        </ul>
        <div><a onClick={() => fields.push({}) }>Add Ingredient</a></div>
      </div>
    )
  }
}
