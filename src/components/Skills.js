import React from "react"

import frontend from "./skills/frontend.js"
import backend from "./skills/backend.js"
import languages from "./skills/languages.js"
import tools from "./skills/tools.js"

function Skills() {
  const frontendList = frontend.map((item) => {
    return (
      <li className='skill'>
        <p>{item.skill}</p>
      </li>
    )
  })

  const backendList = backend.map((item) => {
    return (
      <li className='skill'>
        <p>{item.skill}</p>
      </li>
    )
  })

  const languagesList = languages.map((item) => {
    return (
      <li className='skill'>
        <p>{item.skill}</p>
      </li>
    )
  })

  const toolsList = tools.map((item) => {
    return (
      <li className='skill'>
        <p>{item.skill}</p>
      </li>
    )
  })
  return (
    <div>
      {/* <h1 className='headings'>Skills</h1> */}
      <div className='skills-container'>
        <ul className='skills-card'>
          <h3 className='headings'>Languages</h3>
          {languagesList}
        </ul>
        <hr />
        <ul className='skills-card'>
          <h3 className='headings'>Front End</h3>
          {frontendList}
        </ul>
        <hr />
        <ul className='skills-card'>
          <h3 className='headings'>Back End</h3>
          {backendList}
        </ul>
        <ul className='skills-card'>
          <h3 className='headings'>Tools</h3>
          {toolsList}
        </ul>
      </div>
    </div>
  )
}

export default Skills
