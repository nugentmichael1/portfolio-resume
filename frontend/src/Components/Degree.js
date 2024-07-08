import React from 'react'

import "../CSS/Degree.css"
import eDiploma from '../Assets/eDiploma.pdf'
import bulldog from "../Assets/LogoIcons/FresnoStateBulldog.png"
import pdfIcon from "../Assets/LogoIcons/pdfIcon.png"
// import { GrDocumentPdf } from "react-icons/gr"

function Degree() {
    return (
        <div className='degree'>
            <table className='csuf'>
                <caption><h2>Degree</h2></caption>

                <tbody>
                    <tr>
                        <td id="degreeName" className='info'>Computer Science, BS
                        </td>

                        <td rowSpan={4} className="bulldogLogo">
                            <a href="https://csm.fresnostate.edu/csci/index.html" target="_blank" rel="noreferrer" title='Fresno State Website'>
                                <img src={bulldog} alt="Fresno State Bulldog Mascot logo" />
                            </a>
                        </td>

                        <td rowSpan={4} className="diploma">

                            <a href={eDiploma} target="_blank" rel='noreferrer' title='Click to view eDiploma' >
                                <img id="pdfIcon" src={pdfIcon} alt="pdf file icon" className='pdfIcon' />
                                <br />
                                eDiploma
                                {/* <GrDocumentPdf /> */}
                            </a>
                        </td>

                    </tr>

                    <tr>
                        <td className='info' id="school"><a href="https://csm.fresnostate.edu/csci/index.html" target="_blank" rel="noreferrer" title='Fresno State Website'>
                            California State University, Fresno
                        </a>
                        </td>
                    </tr>
                    <tr>
                        <td className='info' id="gradDate">2022
                        </td>
                    </tr>
                    <tr>
                        <td className='info' id="honors">magna cum laude
                        </td>
                    </tr>
                    {/* <tr>
                            <td className='diploma'>
                                <a href={eDiploma} target="_blank" rel='noreferrer'>Diploma</a>
                            </td>
                        </tr> */}
                </tbody>
            </table >
        </div >
    )
}

export default Degree