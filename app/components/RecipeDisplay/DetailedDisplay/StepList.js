import React from 'react'
const PropTypes = React.PropTypes
import { StyleSheet, css } from 'aphrodite'

function StepList (props) {
  return (
    <div className="container subsection-steps">
      <div className="row">
        {props.steps
          .map((step, index) => {
            var {picture, description, tip} = step
            return (
              <div key={index} className = 'step'>
                <h4>Step {index + 1 }</h4>
                <div className='step-picture-holder'>
                  <img
                    className={
                      `img-responsive step-picture ${css(styles.stepPicture)}`
                    }
                    src={
                      `/public/img/recipes/${picture}`
                    }
                  />
                </div>
                <div className='step-description'> {`Description: ${description}`}</div>
                <div className='step-tip'> {`Tip: ${tip}`}</div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
StepList.propTypes = {
  steps:PropTypes.array.isRequired
}

module.exports = StepList

const styles=StyleSheet.create({
  stepPicture: {
    width: '20%',
  }
})
