import React from 'react'
const PropTypes = React.PropTypes

function IngredientList (props) {
  return (
    <div className="container subsection-ingredients">
      <div className="row">
        {props.ingredients
          .map((ingredient, index) => {
            var {name, quantity, unit} = ingredient
            return (
              <div key={index}>
                {`Ingredient ${index + 1}: ${quantity} ${name} ${unit}`}
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

module.exports = IngredientList
