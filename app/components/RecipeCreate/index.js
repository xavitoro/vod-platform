import React, {Component} from 'react'
import { Field, FieldArray, reduxForm,  SubmissionError } from 'redux-form'
import CustomInput from './CustomInput'
import Ingredients from './Ingredients'
import Steps from './Steps'
import {required} from './validations'
import {fetchRecipeInfo, createRecipe} from '../../data/recipe'
import {connect} from 'react-redux'
import {getSelectOptions} from '../../utils/form'
import {browserHistory} from 'react-router'

@connect((state) => {
  return {
    categoryOptions: getSelectOptions(state.categories, '_id'),
    tagOptions: getSelectOptions(state.tags, '_id'),
    learningPathOptions: getSelectOptions(state.learningPaths, '_id'),
    authorOptions: getSelectOptions(state.authors, '_id')
  }
})
@reduxForm({
  form: 'recipeCreateForm',
})
export default class RecipeCreateForm extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(fetchRecipeInfo())
  }
  preventSubmit(e) {
    e.preventDefault()
  }
  submit(values) {
    this.props.dispatch(createRecipe(values))
      .then(() => {
        browserHistory.push('/')
      })
  }
  render () {
    const {
      submitting,
      handleSubmit,
      categoryOptions,
      tagOptions,
      learningPathOptions,
      authorOptions
    } = this.props
    return (
       <div className="container subsection-recipes">
        <button onClick={this.submit}> Test Submit</button>
        <form id='create-new-video-recipe-form' onSubmit={handleSubmit(this.submit)}>
          <fieldset>
            <legend>Add a new Videos to Keychn VOD Platform</legend>
          </fieldset>
          <p>Recipe Text Details</p>
          <Field
            name='title'
            component={CustomInput}
            placeholder='Recipe title'
            type='text'
            validate={required} />
         <Field
            name='slug'
            component={CustomInput}
            placeholder='Recipe slug'
            type='text'
            validate={required} />
          <Field
            name='description'
            component={CustomInput}
            placeholder='Recipe description'
            type='text'
            validate={required} />

          <p>Recipe Category</p>
          <Field
            name='categories'
            component={CustomInput}
            type='select'
            placeholder='Choose one category'
            options={categoryOptions}
            validate={required}
          />

          <p>Recipe Tags (select multiple)</p>
          <Field
            name='tags'
            component={CustomInput}
            type='select'
            placeholder='Choose one or more tags'
            multi={true}
            simpleValue={true}
            options={tagOptions}
            validate={required}
          />

          <p> Cooking Path (select multiple)</p>
          <Field
            name='learningPath'
            component={CustomInput}
            type='select'
            placeholder='Choose one or more learning paths '
            multi={true}
            simpleValue={true}
            options={learningPathOptions}
            validate={required}
          />

          <p>Recipe Type</p>
           <Field
            name='courseType'
            component={CustomInput}
            type='select'
            placeholder='Choose one recipe type'
            options={[
              {value: 'starter', label: 'Starter'},
              {value: 'main', label: 'Main'},
              {value: 'dessert', label: 'Dessert'}
            ]}
            validate={required}
          />

          <p>Recipe Pictures URLs</p>
          <Field
            name='pictureIngredients'
            component={CustomInput}
            placeholder='Recipe ingredients picture'
            type='text'
            validate={required} />
          <Field
            name='picturePlating'
            component={CustomInput}
            placeholder='Recipe final picture'
            type='text'
            validate={required} />

          <p>Recipe Video URLs</p>
          <Field
            name='videoThumbnail'
            component={CustomInput}
            placeholder='Recipe thumbnail for the video'
            type='text'
            validate={required} />
          <Field
            name='videoPreview'
            component={CustomInput}
            placeholder='Recipe video preview'
            type='text'
            validate={required} />
          <Field
            name='videoFull'
            component={CustomInput}
            placeholder='Recipe video full-length'
            type='text'
            validate={required} />

          <p>Recipe Detailed Information</p>
           <Field
            name='length'
            component={CustomInput}
            placeholder='Recipe length (minutes)'
            type='number' min='5'
            validate={required} />
           <Field
            name='servings'
            component={CustomInput}
            placeholder='Recipe servings (people)'
            type='number' min='1'
            validate={required} />

          <p>Recipe Difficulty</p>
          <Field
            name='difficulty'
            component={CustomInput}
            type='select'
            placeholder='Choose the difficulty'
            options={[
              {value: 'easy', label: 'Easy'},
              {value: 'medium', label: 'Medium'},
              {value: 'hard', label: 'Hard'}
            ]}
            validate={required}
          />
          <p>Author</p>
          <Field
            name='author'
            component={CustomInput}
            type='select'
            placeholder='Choose Author '
            options={authorOptions}
            validate={required}
          />

          <FieldArray name='ingredients' component={Ingredients} />
          <FieldArray name='steps' component={Steps} />
          <div>
            <input
              className='btn btn-primary'
              type='submit'
              value='Add New Recipe'
              disabled={submitting}
              onSubmit={handleSubmit(this.submit)} />
          </div>

        </form>
      </div>
    )
  }
}
