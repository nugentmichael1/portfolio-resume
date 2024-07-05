import React from 'react'

//components
import Card from './Card'

//css
import "../CSS/Cards.css"

//images
import auctioneerImg from "../Assets/ProjectsScreenshots/Auctioneer.png"
import eAImg from "../Assets/ProjectsScreenshots/EA.png"
import gomokuImg from "../Assets/ProjectsScreenshots/Gomoku2.png"
import puzzleSliderImg from "../Assets/ProjectsScreenshots/PuzzleSlider2.png"
import roadmapImg from "../Assets/ProjectsScreenshots/Roadmap.png"

//Used to map each project's title in database to its screenshot name here.
const imgDictionary = {
    "Auctioneer":auctioneerImg,
    "Evolutionary Algorithm":eAImg,
    "Gomoku":gomokuImg,
    "State Space Search":puzzleSliderImg,
    "Roadmap":roadmapImg
}

function createCards(data) {

    //debug
    // console.log("inside create cards before data check")
    // console.log(typeof(data))

    //Guard: empty data
    if (data === undefined) return

    const cards = [];

    //debug
    // console.log("inside create cards when data is an array")
    // console.log(typeof(data))

    data.forEach((project) => {

        //debug
        // console.log(project)

        cards.push(
            <Card
                key={project.Title}
                title={project.Subject}
                concepts={project.Emphasized_Concepts}
                repository={project.GitHub}
                presentation={project.Demo}
                app={project.app}
                img={imgDictionary[project.Title]}
            />

        )
    })
    return cards
}


function CardsContainer({ data }) {
    //debug
    // console.log(typeof(data))
    // console.log(data)

    // useEffect(() => {
    //     if (data !== null) {
    //         setCardContainerContent(buildCardContainer(data))
    //     }
    // }, [data])

    return (
        <div className='Cards-Container'>
            {createCards(data)}
        </div>
    )
}

export default CardsContainer