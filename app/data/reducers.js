import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import ingredients from './ingredients'
import learningPaths from './learningPaths'
import authors from './authors'
import categories from './categories'
import tags from './tags'
import equipment from './equipment'
import skillsLearnt from './skillsLearnt'

const reducers = {
  ingredients,
  learningPaths,
  authors,
  categories,
  tags,
  equipment,
  skillsLearnt,
  form: formReducer
}

export default combineReducers(reducers)
