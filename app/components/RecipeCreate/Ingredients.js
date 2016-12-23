import React, {Component} from 'react'
import {Field} from 'redux-form'
import CustomInput from './CustomInput'
import {required} from './validations'
import {connect} from 'react-redux'
import {getSelectOptions} from '../../utils/form'

@connect((state) => {
  return {ingredientOptions: getSelectOptions(state.ingredients)}
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
        <ol className='form-group col-md-12'>
          {fields.map((ingredient, index) => {
            return (
              <li key={index} style={{paddingBottom: 10}}>
                <div className='form-inline'>
                  <Field
                    name={`${ingredient}.name`}
                    component={CustomInput}
                    type='select'
                    placeholder='Ingredient (e.g. bread)'
                    options={ingredientOptions}
                    validate={required} />
                  <Field
                    name={`${ingredient}.quantity`}
                    component={CustomInput}
                    placeholder='Quantity ingredient (e.g. 2)'
                    type='text'
                    validate={required} />
                  <Field
                    name={`${ingredient}.unit`}
                    component={CustomInput}
                    placeholder='Quantity unit (e.g. slice)'
                    type='text'
                    validate={required} />
                  <a onClick={() => fields.remove(index)}>Remove</a>
                </div>
             </li>
            )
          })}
          <a onClick={() => fields.push({}) }>Add Ingredient</a>
        </ol>
      </div>
    )
  }
}
