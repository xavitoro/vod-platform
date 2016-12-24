import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import ingredients from './ingredients'
import learningPaths from './learningPaths'
import authors from './authors'

const reducers = {
  ingredients,
  learningPaths,
  authors,
  form: formReducer
}

export default combineReducers(reducers)
