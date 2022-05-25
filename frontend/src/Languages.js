import React, { useEffect } from 'react'
import http from "./http-common"



function Languages() {

    useEffect(() => {
        retrieveLanguages();
    }, [])

    const retrieveLanguages = async () => {
        const results = await http.get(`/languages`);
        console.log(results.data)

        buildTable(results.data)

    }

    const buildTable = (languages) => {

        const confidenceCategory = { Weak: [], Average: [], Strong: [] }
        languages.forEach(({ Title, Confidence }) => {
            console.log(`Title: ${Title}; Confidence: ${Confidence}`)
            confidenceCategory[Confidence].push({Title})
        })
        console.log(confidenceCategory)
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Confidence</th>
                    <th>Languages</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Weak</th>
                    <td>Prolog, Haskell, PHP, SQL, Mongoose, Java</td>
                </tr>
                <tr>
                    <th>Average</th>
                    <td>JavaScript, HTML, CSS, </td>
                </tr>
                <tr>
                    <th>Strong</th>
                    <td>C++</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Languages