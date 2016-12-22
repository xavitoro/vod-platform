import React, {Component} from 'react'
import { Field, Fields, FieldArray, reduxForm,  SubmissionError } from 'redux-form';

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
function CustomInput({input, placeholder, type, meta: {touched: {touched, error}}}) {
  console.log(input)
  return (
    <div className='form-group col-md-12'>
      <input {...input} className='form-control' placeholder={placeholder}/>
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
          <select className='form-control' name='selectRecipeCategory' >
            <option value='default' selected>Choose one category</option>
            <option value='spanish'>Spanish</option>
            <option value='asian' >Asian</option>
            <option value='mexican' >Mexican</option>
          </select>

          <p>Recipe Tags (select multiple)</p>
          <select className='form-control' name='selectRecipeTags' multiple>
            <option value='default' selected>Choose one or more tags</option>
            <option value='healthy' >healthy</option>
            <option value='veggie' >veggie</option>
            <option value='baked' >baked</option>
            <option value='grilled' >grilled</option>
            <option value='roasted' >roasted</option>
          </select>

          <p> Cooking Path (select multiple)</p>
          <select className='form-control' name='selectLearningPath' multiple>
            <option value='default' selected>Choose one or more learning paths </option>
            <option value='spanish-basics'>Learn the Spanish basics</option>
            <option value='modern-techniques-ferran' >Learn the modern techniques with Ferran</option>
            <option value='french-basics' >Learn the French basics</option>
            <option value='italian-basics' >Learn the Italian basics</option>
          </select>

          <p>Recipe Type</p>
          <select className='form-control' name='selectRecipeType'>
            <option value='default' selected>Choose one recipe type</option>
            <option value='starter-course'>Starter</option>
            <option value='main-course' >Main</option>
            <option value='dessert-course' >Dessert</option>
          </select>

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
          <select className='form-control' name='selectRecipeDifficulty'>
            <option value='default' selected>Choose the difficulty</option>
            <option value='recipe-difficulty-easy'>Easy</option>
            <option value='recipe-difficulty-easy'>Medium</option>
            <option value='recipe-difficulty-easy'>Hard</option>
          </select>

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
