import React from 'react'

import puzzleSliderClip from "../Assets/15PuzzleClip.mp4"
// import puzzleSliderClip from "https://drive.google.com/file/d/1ihOSkws-7aWcjhhUk06rXQO-vpglY3sE/view?usp=sharing"

import bulldog from "../Assets/FresnoStateBulldog.png"

function Carousel() {
    return (<>

        


        {/* <div className='bulldogMask'>
            <img src={bulldog} id='bulldogExperiment' />
        </div> */}
        <div id='puzzleMask'>
            <video width={"560"} height={"315"} className='video' controls={false} loop autoPlay={false} muted>
                <source src={puzzleSliderClip} type="video/mp4" />
            </video>
        </div>



        <div className='carousel'>
            {/* <mask id="puzzleMask"> */}
            <div className='carousel-item1'>
                {/* <video width={"560"} height={"315"} className='video' controls loop autoPlay muted>
                    <source src={puzzleSliderClip} type="video/mp4" />
                </video> */}
            </div>
            {/* </mask> */}
            <div className='carousel-item2'>
                Video Presentation
            </div>
            <div className='carousel-item3'>
                Live Demo
            </div>
            <div className='carousel-item4'>
                Repository
            </div>
        </div >
    </>
    )
}

export default Carousel


{/* <iframe width="560" className={"carousel"} height="315" src="https://www.youtube.com/embed/iuDEVULaebE?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> */ }
{/* <table className='carouselTbl'>
                <caption>
                    State Space Search
                </caption>
                <tbody>
                    <tr>
                        <td rowSpan={3}>
                            <video width={"560"} height={"315"} className='carousel' controls loop autoPlay muted><source src={puzzleSliderClip} type="video/mp4" /></video>
                        </td>
                        <td>
                            Video Presentation
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Demo
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Repository
                        </td>
                    </tr>
                </tbody> */}
{/* <tbody>
                    <tr>
                        <td>
                            <video width={"560"} height={"315"} className='carousel' controls loop autoPlay muted>
                                <source src={puzzleSliderClip} type="video/mp4" />
                            </video>
                        </td>
                    </tr>
                </tbody> */}
{/* </table> */ }