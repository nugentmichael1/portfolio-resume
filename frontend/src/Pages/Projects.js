import React, { useEffect, useState } from 'react'
import http from '../http-common'
import '../CSS/Projects.css'




const buildTable = (projects) => {


  const tbody = []

  //react requirement for arrays of elements
  let rowKey = 0

  //decides classname
  let even = true

  projects.forEach(({ Title, Subject, Emphasized_Concepts, Notes, Demo, GitHub }) => {
    const row = []

    let evenOddClassName = even ? "even" : "odd"

    //react requirement for arrays of elements
    let key = 0

    row.push(<td key={key++}><a href={Demo} target="_blank" rel='noreferrer'>{Title}</a></td>)
    row.push(<td key={key++}>{Subject}</td>)
    row.push(<td key={key++}>{nestedLists(Emphasized_Concepts)}</td>)
    // row.push(<td key={key++}>{Notes}</td>)
    let shortURL = GitHub.slice(33)
    // row.push(<td key={key++}><a href={Demo} target="_blank" rel='noreferrer'>{Demo}</a></td>)
    row.push(<td key={key++}><a href={GitHub} target="_blank" rel='noreferrer'>{shortURL}</a></td>)

    tbody.push(<tr key={rowKey++} className={evenOddClassName}>{row}</tr>)

    //update even/odd class for next iteration
    even = 1 - even
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

  else if (typeof (composite) === "object") {
    const label = Object.keys(composite)[0]

    return [label, ":", nestedLists(composite[label])]
  }

  return composite
}

function Projects() {

  const [tbody, setTbody] = useState()

  useEffect(() => {

    const getProjects = async () => {

      await http.get("/projects/all")

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
            {/* <th>Notes</th> */}
            {/* <th>Demo</th> */}
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