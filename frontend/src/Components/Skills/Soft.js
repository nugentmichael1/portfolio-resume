// Soft - Sub component of Skills component

import React from 'react'

const sSData = ["Teamwork", "Problem Solving", "Communication", "Critical Thinking", "Interpersonal", "Time management"]
// Analysis, Logical reasoning


const buildTRows = (list) => {


    let oddXorEven = 'odd'

    const rows = []
    for (let j = 0; j < list.length / 3; j++) {

        const td = []

        for (let i = 0; i < 3; i++) {
            td.push(
                <td key={list[i + j]} className={oddXorEven}>{list[i + j]}</td>
            )
            oddXorEven = (oddXorEven === 'odd') ? 'even' : 'odd'
        }
        rows.push(
            <tr key={j}>
                {td}
            </tr>
        )
    }

    return rows
}

const Soft = function () {

    return (<>

        <table id="Soft">
            <caption>
                <h3>
                    Common
                </h3>
            </caption>
            <tbody>
                {buildTRows(sSData)}
                {/* <tr>
                    <td>
                        {buildList(sSData)}
                    </td>
                </tr> */}
            </tbody>
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