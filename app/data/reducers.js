import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import ingredients from './ingredients'
import learningPaths from './learningPaths'

const reducers = {
  ingredients,
  learningPaths,
  form: formReducer
}

export default combineReducers(reducers)
