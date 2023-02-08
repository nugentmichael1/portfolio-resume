import React from 'react'

import "../CSS/Degree.css"
import eDiploma from '../Assets/eDiploma.pdf'
import bulldog from "../Assets/FresnoStateBulldog.png"

function Degree() {
    return (
        <div className='degree'>
            <table className='csuf'>
                <caption>Degree</caption>
                <a href={eDiploma} target="_blank" rel='noreferrer' title='Click to view eDiploma'>
                    <tbody>
                        <tr>
                            <td rowSpan={5}><img src={bulldog} alt="Fresno State Bulldog Mascot logo" /></td>
                            <td className='name'>BS Computer Science
                            </td>
                        </tr>
                        <tr>
                            <td className='school'><a href="https://csm.fresnostate.edu/csci/index.html" target="_blank" rel="noreferrer" title='Fresno State Website'>California State University, Fresno</a>
                            </td>
                        </tr>
                        <tr>
                            <td className='gradDate'>August 2022
                            </td>
                        </tr>
                        <tr>
                            <td className='honors'>magna cum laude
                            </td>
                        </tr>
                        {/* <tr>
                            <td className='diploma'>
                                <a href={eDiploma} target="_blank" rel='noreferrer'>Diploma</a>
                            </td>
                        </tr> */}
                    </tbody>
                </a>
            </table >
        </div >
    )
}

export default Degree