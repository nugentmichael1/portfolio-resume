//Academic Projects component: table

// import Carousel from "./Carousel"

//react
import React, { useEffect, useState } from 'react'

//css
import '../CSS/AcademicProjects.css'

//utility
// import projectsTable from '../Utility/projectsTable'

//Components
import CardsContainer from '../Components/CardsContainer'
// import CarouselContainer from '../Components/CarouselContainer'
// import LogoLoader from '../Components/LogoLoader'

function Projects({ data }) {

  // const [carouselContent, setCarouselContent] = useState(<p>Fetching academic projects data from backend.  This should only take 3 seconds at most.</p>)
  const [cardsContainerContent, setCardsContainerContent] = useState(<p>Please wait a few seconds for the backend instance  data is fetched from the server.</p>)


  useEffect(() => {
    if (data !== null) {
      // setCarouselContent(<CarouselContainer data={data}/>)
      setCardsContainerContent(<CardsContainer data={data} />)
    }
  }, [data])

  return (
    <div id='Projects' className='section'>
      {/* <LogoLoader /> */}
      <h1 className='pageh1'>Academic Projects</h1>
      {/* {carouselContent} */}
      {cardsContainerContent}
    </div >
  )
}

export default Projects




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