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

function Projects({ data }) {

  // const [carouselContent, setCarouselContent] = useState(<p>Fetching academic projects data from backend.  This should only take 3 seconds at most.</p>)
  const [cardsContainerContent, setCardsContainerContent] = useState(<CardsContainer />)


  useEffect(() => {
    if (data !== null) {
      // setCarouselContent(<CarouselContainer data={data}/>)
      setCardsContainerContent(<CardsContainer data={data} />)
    }
  }, [data])

  return (
    <div className='Projects'>
      <h2>Academic Projects</h2>
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