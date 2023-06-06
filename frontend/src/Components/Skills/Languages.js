// Languages Component - Creates a table of my competencies for known programming languages.

import React, { useEffect, useState } from 'react'

function Languages({ data }) {

    // states for table row and header
    const [row, setRow] = useState(<td>Fetching languages data from backend.  This should only take 1-3 seconds.</td>)
    const [thead, setTHead] = useState()

    useEffect(() => {
        if (data !== null) {
            // build table with languages data
            buildTable(data)
        }
    }, [data])

    // useEffect(() => {

    //     const getLanguages = () => {

    //         //get languages data from session storage
    //         const languages = JSON.parse(sessionStorage.getItem("languages"))

    //         //build table with languages data
    //         buildTable(languages)

    //         //remove session storage change event listener, if it even exists
    //         window.removeEventListener('allData', getLanguages)
    //     }

    //     //check session storage for existence of langauges data

    //     if (sessionStorage.getItem("languages") != null)
    //         //retrieve and build table
    //         getLanguages()

    //     else {
    //         //set up event listener to wait for arrival of data
    //         window.addEventListener('allData', getLanguages)
    //     }

    // }, [])


    //builds table of languages with passed data
    const buildTable = (languages) => {


        const categories = { Novice: [], "Advanced Beginner": [], Competent: [], Proficient: [], Expert: [] }

        //distribute each language name to its associated cofidence level
        languages.forEach(({ Name, Confidence }) => {
            categories[Confidence].push(Name)
        })

        //arrays for header and row
        const thead = []
        const row = []

        //keys for child components
        let key2 = 0

        //odd or even class
        let oddXorEven = 'odd'


        for (const category in categories) {
            thead.push(<th key={key2++} className={oddXorEven}>{category}</th>)

            const titles = []
            let key1 = 0

            let oddXorEven2 = 'odd'

            categories[category].forEach(title => {
                titles.push(<li key={key1++} className={oddXorEven2}>{title}</li>)

                oddXorEven2 = (oddXorEven2 === 'odd') ? 'even' : 'odd';
            })

            row.push(<td key={key2} className={oddXorEven}><ul key={key2++}>{titles}</ul></td>)

            oddXorEven = (oddXorEven === 'odd') ? 'even' : 'odd';
        }

        //use state functions to dynamically change table header and row
        setTHead(thead)
        setRow(row)
    }


    return (
        // {table}

        <table id='Languages'>
            <caption>
                <h3>Languages</h3>
            </caption>
            <thead>
                <tr>
                    {thead}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {row}
                </tr>
            </tbody>
        </table>
    )
}

export default Languages


//indirect firebase functions to firestore access.
// import http from "../http-common"

//direct firestore access
//import getLanguagesFS from '../firestore'


// // direct firestore access version
// const retrieveLanguagesFS = async () => {
//     await getLanguagesFS()
//         .then((res) => {
//             buildTable(res)
//         })
//         .catch((err) => {
//             setRow(<td>Firestore call failed.  See console for error.</td>)
//             console.error(err)
//         })
// }

// console.log(retrieveLanguagesFS());




        // if (sSLanguages != null) buildTable(JSON.parse(sessionStorage.getItem("languages")))
        // const retrieveLanguages = async () => {
        //     await http.get(`/languages/all`)
        //         .then((res) => {

        //             buildTable(res.data)

        //         })
        //         .catch((err) => {
        //             setRow(<td>Failed to fetch Langauges data from backend.  See console for error.</td>)
        //             console.error(err)
        //         })

        // }

        // retrieveLanguages();