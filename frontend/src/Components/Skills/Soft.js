// Soft - Sub component of Skills component

import React from 'react'
import buildSkillsTBody from '../../Utility/buildSkillsTBody'

const sSData = {
    "People":["Teamwork", "Communication",  "Interpersonal"],
    "Logic":["Problem Solving", "Critical Thinking", "Analysis"], 
    "Utility": ["Time Management"]
}
// Analysis, Logical reasoning



const Soft = function () {

    return (<>

        <table id="Soft">
            <caption>
                <h3>
                    Soft Skills
                </h3>
            </caption>
                {buildSkillsTBody(sSData)}
            {/* <tbody>
                {buildTRows(sSData)}
    
            </tbody> */}
        </table>

        {/* <figure id="Soft">
            <figcaption>
                <h3>
                    Common
                </h3>
            </figcaption>
            <ul>
                {buildList(sSData)}
            </ul>
        </figure> */}

    </>
    )
}

export default Soft


// const buildList = (dataArr) => {

    //     const li = []
    
    //     let oddXorEven = "odd"
    
    //     dataArr.forEach((skill) => {
    //         li.push(
    //             <li className={oddXorEven} key={skill}>{skill}</li>
    //         )
    //         oddXorEven = (oddXorEven === "odd") ? "even" : "odd"
    //     })
    
    //     return li
    // }


// const buildTRows = (list) => {

//     let oddXorEven = 'odd'

//     const rows = []
//     for (let j = 0; j < list.length / 3; j++) {

//         const td = []

//         for (let i = 0; i < 3; i++) {
//             td.push(
//                 <td key={list[i + (j*3)]} className={oddXorEven}>{list[i + (j*3)]}</td>
//             )
//             oddXorEven = (oddXorEven === 'odd') ? 'even' : 'odd'
//         }
//         rows.push(
//             <tr key={j}>
//                 {td}
//             </tr>
//         )
//     }

//     return rows
// }