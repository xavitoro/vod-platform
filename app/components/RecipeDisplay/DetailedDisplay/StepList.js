import React, { PropTypes } from 'react'

import { StyleSheet, css } from 'aphrodite'

function StepList ({ steps }) {
  return (
    <div className="container subsection-steps">
      <div className="row">
        {steps
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

export default StepList

const styles=StyleSheet.create({
  stepPicture: {
    width: '20%',
  }
})
