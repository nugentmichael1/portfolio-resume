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
import CarouselCaption from '../Components/CarouselCaption'

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


  data.forEach((project) => {

    carouselItems.push(
      < Carousel.Item key={project.Title}>
        <video controls={false} autoPlay loop muted>
          <source src={videos[project.clipName]} type="video/mp4" />
        </video>
        <Carousel.Caption>
          <CarouselCaption title={project.Subject} concepts={project.Emphasized_Concepts} repository={project.GitHub} presentation={project.Demo} app={project.app} />
        </Carousel.Caption>
      </Carousel.Item >
    )
  })

  return <Carousel fade indicators={false}>
    {carouselItems}
  </Carousel>

}



function Projects({ data }) {

  const [content, setContent] = useState(<p>Fetching academic projects data from backend.  This should only take 3 seconds at most and is the cost of a free tier serverless architecture.</p>)


  useEffect(() => {
    if (data !== null) {
      setContent(buildCarousel(data))
    }
  }, [data])


  // const carousel = buildCarousel(data)


  // useEffect(() => {

  //   const getProjects = () => {

  //     const projects = JSON.parse(sessionStorage.getItem("projects"))

  //     // console.log(projects)

  //     setContent(buildCarousel(projects))

  //     window.removeEventListener("allData", getProjects)
  //   }

  //   if (sessionStorage.getItem("projects") != null) getProjects()
  //   else {
  //     window.addEventListener("allData", getProjects)
  //   }


  // }, [])

  return (
    <div className='Projects'>
      {content}
    </div >
  )
}

export default Projects