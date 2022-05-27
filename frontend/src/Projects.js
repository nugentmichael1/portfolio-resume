import React, { useEffect, useState } from 'react'
import http from './http-common'

const buildTable = (projects) => {
  const tbody = []

  // for (let category in projects[0]) {
  //   // console.log(category)
  // }

  let rowKey = 0

  projects.forEach(({ Title, Subject, Emphasized_Concepts, Notes, Demo, GitHub }) => {
    const row = []

    let key = 0

    row.push(<td key={key++}>{Title}</td>)
    row.push(<td key={key++}>{Subject}</td>)
    row.push(<td key={key++}>{nestedLists(Emphasized_Concepts)}</td>)
    row.push(<td key={key++}>{Notes}</td>)
    row.push(<td key={key++}><a href={Demo} target="_blank">New Tab/Window</a></td>)
    row.push(<td key={key++}><a href={GitHub} target="_blank">New Tab/Window</a></td>)

    tbody.push(<tr key={rowKey++}>{row}</tr>)
  });


  return tbody
}

const nestedLists = (composite) => {

  if (Array.isArray(composite)) {
    const conceptsList = []

    let conceptsKey = 0

    composite.forEach(concept => {

      conceptsList.push(<li key={conceptsKey++}>{nestedLists(concept)}</li>)
    })
    
    return <ul>{conceptsList}</ul>

  }

  else if(typeof(composite)==="object"){
    const label = Object.keys(composite)[0]

    return [label, ":", nestedLists(composite[label])]
  }

  //else
  return composite
}

function Projects() {

  const [tbody, setTbody] = useState()

  useEffect(() => {

    const getProjects = async () => {

      await http.get("/projects")

        .then((res) => {

          setTbody(buildTable(res.data))
        })

        .catch((err) => {
          console.error(err)
        })
    }

    getProjects()
  }, [])

  return (
    <div className='Projects'>
      <table>
        <caption>
          Projects
        </caption>
        <thead>
          <tr>
            <th>Title</th>
            <th>Subject</th>
            <th>Emphasized Concepts</th>
            <th>Notes</th>
            <th>Demo</th>
            <th>GitHub</th>
          </tr>
        </thead>
        <tbody>
          {tbody}
        </tbody>
      </table>
    </div>
  )
}

export default Projects