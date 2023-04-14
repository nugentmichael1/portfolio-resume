// Soft - Sub component of Skills component

import React from 'react'

const sSData = ["Teamwork", "Problem Solving", "Communication", "Critical Thinking", "Interpersonal", "Time management"]
// Analysis, Logical reasoning

const buildList = (dataArr) => {

    const li = []

    let oddXorEven = "odd"

    dataArr.forEach((skill) => {
        li.push(
            <li className={oddXorEven} key={skill}>{skill}</li>
        )
        oddXorEven = (oddXorEven === "odd") ? "even" : "odd"
    })

    return li
}

const Soft = function () {


    return (<>

        <h3>Soft</h3>
        <ul id="SoftSkills">
            {buildList(sSData)}
        </ul>
    </>
    )
}

export default Soft