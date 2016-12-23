import React, {Component} from 'react'
import { Field, FieldArray, reduxForm,  SubmissionError } from 'redux-form'
import CustomInput from './CustomInput'
import Ingredients from './Ingredients'
import Steps from './Steps'
import {required} from './validations'
import {fetchRecipeInfo} from '../../data/recipe'

function submit(values) {
  //validation
  //
  console.log(values, 'values')
}


@reduxForm({
  form: 'recipeCreateForm',
})
export default class RecipeCreateForm extends Component {
  componentDidMount() {
    this.props.dispatch(fetchRecipeInfo())
  }
  preventSubmit(e) {
    e.preventDefault()
  }
  render () {
    const {submitting, handleSubmit} = this.props
    return (
       <div className="container subsection-recipes">
        <form id='create-new-video-recipe-form' onSubmit={handleSubmit(submit)}>
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
            options={[
              {value: '', label: 'Choose one category'},
              {value: 'spanish', label: 'Spanish'},
              {value: 'asian', label: 'Asian'},
              {value: 'mexican', label: 'Mexican'},
            ]}
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
            options={[
              {value: 'healthy', label: 'healthy'},
              {value: 'veggie', label: 'veggie'},
              {value: 'baked', label: 'baked'},
              {value: 'grilled', label: 'grilled'},
              {value: 'roasted', label: 'roasted'}
            ]}
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
            options={[
             {value: 'spanish-basics', label: 'Learn the Spanish basics'},
             {value: 'modern-techniques-ferran', label: 'Learn the modern techniques with Ferran'},
             {value: 'french-basics', label: 'Learn the French basics'},
             {value: 'italian-basics', label: 'Learn the Italian basics'}
            ]}
            validate={required}
          />

          <p>Recipe Type</p>
           <Field
            name='courseType'
            component={CustomInput}
            type='select'
            placeholder='Choose one category'
            options={[
              {value: '', label: 'Choose one recipe type'},
              {value: 'starter-course', label: 'Starter'},
              {value: 'main-course', label: 'Main'},
              {value: 'dessert-course', label: 'Dessert'}
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
              {value: '', label: 'Choose the difficulty'},
              {value: 'easy', label: 'Easy'},
              {value: 'medium', label: 'Medium'},
              {value: 'hard', label: 'Hard'}
            ]}
            validate={required}
          />

         {/* <p>Author Information</p>
          <div className='form-group col-md-12'>
            <input className='form-control' name='authorThumbnail' placeholder='Author thumbnail URL' type='text' />
          </div>
          <div className='form-group col-md-12'>
            <input className='form-control' name='authorName' placeholder='Author name' type='text' />
          </div>
          <div className='form-group col-md-12'>
            <input className='form-control' name='authorDescription' placeholder='Author description' type='text' />
          </div>*/}

          <FieldArray name='ingredients' component={Ingredients} />
          <FieldArray name='steps' component={Steps} />
          <div>
            <input
              className='btn btn-primary'
              type='submit'
              value='Add New Recipe'
              onSubmit={handleSubmit(submit)} />
          </div>

        </form>
      </div>
    )
  }
}
