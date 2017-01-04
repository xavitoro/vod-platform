import React from 'react'
const PropTypes = React.PropTypes

function EquipmentList (props) {
  return (
    <div className="container subsection-equipment">
      <div className="row">
      <h4>Equipment</h4>
        {props.equipment
          .map((utensil, index) => {
            var {name} = utensil
            return (
              <div key={index} className = 'utensil'>
                <div className='utensil-name'> {`Name: ${name}`}</div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
EquipmentList.propTypes = {
  equipment:PropTypes.array.isRequired
}

module.exports = EquipmentList
