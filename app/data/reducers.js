import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import ingredients from './ingredients'
import learningPaths from './learningPaths'
import authors from './authors'
import categories from './categories'
import tags from './tags'

const reducers = {
  ingredients,
  learningPaths,
  authors,
  categories,
  tags,
  form: formReducer
}

export default combineReducers(reducers)
