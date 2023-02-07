import React from 'react'

import "../CSS/Degree.css"
import eDiploma from '../Components/eDiploma.pdf'

function Degree() {
    return (
        <div className='Degree'>
            <table className='csuf'>
                <caption>Degree</caption>
                <tbody>
                    <tr>
                        <td className='degree'>BS Computer Science
                        </td>
                    </tr>
                    <tr>
                        <td className='school'><a href="https://csm.fresnostate.edu/csci/index.html" target="_blank" rel="noreferrer">California State University, Fresno</a>
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
                    <tr>
                        <td className='diploma'>
                            <a href={eDiploma} target="_blank" rel='noreferrer'>Diploma</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Degree