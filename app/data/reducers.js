import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import ingredients from './ingredients'

const reducers = {
  ingredients,
  form: formReducer
}

export default combineReducers(reducers)
