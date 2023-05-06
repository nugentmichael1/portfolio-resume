//Academic Projects component: table

// import Carousel from "./Carousel"

//react
import React, { useEffect, useState } from 'react'
import Carousel from "react-bootstrap/Carousel"

//css
import '../CSS/AcademicProjects.css'

//utility
// import projectsTable from '../Utility/projectsTable'

//Components
import CarouselCaption from './CarouselCaption'

//videos
import puzzleSliderClip from "../Assets/Videos/15PuzzleClip.mp4"
import gomoku from "../Assets/Videos/GomokuDemo.mp4"
import auctioneer from "../Assets/Videos/AuctioneerDemo.mp4"
import nQueens from "../Assets/Videos/NQueensDemo.mp4"
import roadMap from "../Assets/Videos/RoadMapDemo.mp4"


//sw2=software engineering 2; sss=state space search; ea= evolutionary algorithms; wd=web development
const videos = { sockets: auctioneer, sw2: roadMap, sss: puzzleSliderClip, ea: nQueens, wd: gomoku }

function buildCarousel(data) {

  const carouselItems = [];


  data.forEach((project, i) => {

    carouselItems.push(
      < Carousel.Item key={project.Title}>
        <video controls={false} autoPlay loop muted>
          <source src={videos[project.clipName]} type="video/mp4" />
        </video>
        <Carousel.Caption>
          <CarouselCaption title={project.Title} repository={project.GitHub} presentation={project.Demo} app={project.app} />
        </Carousel.Caption>
      </Carousel.Item >
    )
  })

  return <Carousel fade>
    {carouselItems}
  </Carousel>

}



function Projects() {

  const [content, setContent] = useState(<p>Fetching academic projects data from backend.</p>)

  useEffect(() => {

    const getProjects = () => {

      const projects = JSON.parse(sessionStorage.getItem("projects"))

      // console.log(projects)

      setContent(buildCarousel(projects))

      window.removeEventListener("allData", getProjects)
    }

    if (sessionStorage.getItem("projects") != null) getProjects()
    else {
      window.addEventListener("allData", getProjects)
    }


  }, [])

  return (
    <div className='Projects'>
      <h3 id='projectsCaption'>Projects</h3>
      {content}
      {/* <table>
        <caption>
          <h3>Projects</h3>
        </caption>
        <thead>
          <tr>
            <th>Title</th>
            <th>Course</th>
            <th>Emphasized Concepts</th>
            <th>Notes</th>
            <th>Demo</th>
            <th>GitHub</th>
          </tr>
        </thead>
        <tbody>
          {tbody}
        </tbody>
      </table> */}
      {/* <Carousel fade>
        <Carousel.Item>
          <video controls={false} autoPlay loop muted>
            <source src={puzzleSliderClip} type="video/mp4" />
          </video>
          <Carousel.Caption>
            <CarouselCaption title="State Space Search" />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <video controls={false} autoPlay loop muted>
            <source src={gomoku} type="video/mp4" />
          </video>
          <Carousel.Caption>
            <CarouselCaption title="Gomoku" />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </div >
  )
}

export default Projects