//Container component for the carousel add-on.  The videos will need to be reincluded in the src/Assets/Videos folder if this is ever used again.

import React from 'react'
import Carousel from "react-bootstrap/Carousel"

//Components
import CarouselCaption from './CarouselCaption'

//CSS
import '../CSS/Carousel.css'

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

function CarouselContainer({data}) {
  return (
    <div className='Carousel-Container'>
      {buildCarousel(data)}
    </div>
  )
}

export default CarouselContainer