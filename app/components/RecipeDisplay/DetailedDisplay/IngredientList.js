import React, { PropTypes } from 'react'

function IngredientList ( { ingredients }) {
  return (
    <div className="container subsection-ingredients">
      <div className="row">
      <h4>Ingredients</h4>
        {ingredients
          .map((ingredient, index) => {
            var {name, quantity, unit} = ingredient
            return (
              <div key={index} className = 'ingredient'>
                <div className='ingredient-quantity'> {`Qty: ${quantity}`}</div>
                <div className='ingredient-name'> {`Name: ${name}`}</div>
                <div className='ingredient-unit'> {`Unit: ${unit}`}</div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
IngredientList.propTypes = {
  ingredients:PropTypes.array.isRequired
}

export default IngredientList
