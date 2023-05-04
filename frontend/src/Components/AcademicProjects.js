//Academic Projects component: table

import Carousel from "./Carousel"

//react
import React, { useEffect, useState } from 'react'

//css
import '../CSS/AcademicProjects.css'

//utility
import projectsTable from '../Utility/projectsTable'


function Projects() {

  const [tbody, setTbody] = useState(<tr className="even"><td colSpan={4}>Fetching academic projects data from backend.</td></tr>)

  useEffect(() => {

    const getProjects = () => {

      const projects = JSON.parse(sessionStorage.getItem("projects"))

      setTbody(projectsTable(projects))

      window.removeEventListener("allData", getProjects)
    }

    if (sessionStorage.getItem("projects") != null) getProjects()
    else {
      window.addEventListener("allData", getProjects)
    }


  }, [])

  return (
    <div className='Projects'>
      <table>
        <caption>
          <h3>Projects</h3>
        </caption>
        <thead>
          <tr>
            <th>Title</th>
            <th>Course</th>
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
      <Carousel />
    </div>
  )
}

export default Projects



 // const getProjects = async () => {

    //   await http.get("/projects/all")

    //     .then((res) => {

    //       setTbody(buildTable(res.data))
    //     })

    //     .catch((err) => {
    //       console.error(err)
    //     })
    // }

    // getProjects()