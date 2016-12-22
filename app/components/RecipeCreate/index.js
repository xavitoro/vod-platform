import React, {Component} from 'react'
import { Field, Fields, FieldArray, reduxForm,  SubmissionError } from 'redux-form'
import Select from 'react-select'

const requiredFields = [
  'title',
  'slug',
  'description',
  'categories',
  'tags',
  'learningPath',
  'courseType',
  'pictureIngredients',
  'picturePlating',
  'videoThumbnail',
  'videoPreview',
  'videoPreview',
  'length',
  'servings',
  'difficulty',
  // 'author': [
  //   "name",
  //   "thumbnail",
  //   "description"
  // ],
  // "ingredients": [{
	// 		"name": "bread",
	// 		"quantity": "2",
	// 		"unit": "slices"
  // }],
  // "steps": [{
  //   "picture": "4.jpg",
  //   "description": "Toast the bread slices.",
  //   "tip": "Crunchy outside, soft inside!"
  // },
]

function formatSelectValue(data) {
  if (!Array.isArray(data)) {
    return data && data.value
  }
  return data.map(opt => opt.value)
}

function CustomInput({
  input, placeholder, type, options, multi,
  min, max,  meta: {touched: {touched, error}}
}) {
  const field = (type==='select') ?
    <Select
      {...input}
      placeholder={placeholder}
      options={options}
      multi={multi}
      onChange={(option) => { input.onChange(formatSelectValue(option))} }
      onBlur={(option) => input.onChange(formatSelectValue(option))} />
    :
    <input {...input} className='form-control' placeholder={placeholder}/>

  return (
    <div className='form-group col-md-12'>
      {field}
      {touched && error && <span>{error}</span>}
    </div>
  )
}



function submit(values) {

  console.log(values, 'values')
}

@reduxForm({
  form: 'recipeCreateForm',
})
export default class RecipeCreateForm extends Component {
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
            type='text' />
          <Field
            name='slug'
            component={CustomInput}
            placeholder='Recipe slug'
            type='text' />
          <Field
            name='description'
            component={CustomInput}
            placeholder='Recipe description'
            type='text' />

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
          />

          <p>Recipe Pictures URLs</p>
          <Field
            name='pictureIngredients'
            component={CustomInput}
            placeholder='Recipe ingredients picture'
            type='text' />
          <Field
            name='picturePlating'
            component={CustomInput}
            placeholder='Recipe final picture'
            type='text' />

          <p>Recipe Video URLs</p>
          <Field
            name='videoThumbnail'
            component={CustomInput}
            placeholder='Recipe thumbnail for the video'
            type='text' />
          <Field
            name='videoPreview'
            component={CustomInput}
            placeholder='Recipe video preview'
            type='text' />
          <Field
            name='videoFull'
            component={CustomInput}
            placeholder='Recipe video full-length'
            type='text' />

          <p>Recipe Detailed Information</p>
           <Field
            name='length'
            component={CustomInput}
            placeholder='Recipe length (minutes)'
            type='number' min='5' />
           <Field
            name='servings'
            component={CustomInput}
            placeholder='Recipe servings (people)'
            type='number' min='1' />

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
          </div>
          <p>Recipe Ingredients </p>
          <ol id='ingredientList' className='form-group col-md-12'>
            <li>
              <input type='text' name='p_new_qty' placeholder='Quantity ingredient (e.g. 2)' />
              <input type='text' name='p_new_qty_unit' placeholder='Quantity unit (e.g. slice)' />
              <input type='text' name='p_new_ingredient' placeholder='Ingredient (e.g. bread)' />
              <a href='#' id='addNewIngredient'>Add Ingredient</a>
            </li>
          </ol>

          <p>Recipe Steps </p>
          <ol id='stepList' className='form-group col-md-12'>
            <li>
              <h4>Step</h4>
              <input type='text' name='p_new_step_picture' className='form-group col-md-12'
                     placeholder='Picture URL' />
              <input type='text' name='p_new_step_description' className='form-group col-md-12'
                placeholder='Description' />
              <input type='text' name='p_new_step_tips' className='form-group col-md-12'  placeholder='Tip' />
              <a href='#' id='addNewStep'>Add Step</a>
            </li>
          </ol>*/}

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
