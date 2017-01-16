import React, { PropTypes } from 'react'


function SkillsLearntList (props) {
  return (
    <div className="container subsection-skills-learnt">
      <div className="row">
        <h4>Skills Learnt in this recipe</h4>
        {props.skillsLearnt
          .map((skill, index) => {
            var {name} = skill
            return (
              <div key={index} className = 'skill'>
                <div className='skill-name'> {`> ${name}`}</div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
SkillsLearntList.propTypes = {
  skillsLearnt:PropTypes.array.isRequired
}

export default SkillsLearntList
