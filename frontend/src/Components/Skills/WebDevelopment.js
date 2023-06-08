

import React from 'react'
import buildSkillsTBody from '../../Utility/buildSkillsTBody'

const WDData = {
  "Frontend": ["React", "HTML", "CSS", "JavaScript"],
  "Backend": ["REST API", "CRUD", "Node", "SQL", "NoSQL"],
  "Full Stack": ["LAMP", "MERN", "AJAX"]
}

function WebDevelopment() {

  return (
    <table id={"WebDevelopment"}>
      <caption>
        <h3>
          Web Development
        </h3>
      </caption>
      {buildSkillsTBody(WDData)}
    </table>)
}

export default WebDevelopment