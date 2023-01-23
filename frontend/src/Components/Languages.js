import React, { useEffect, useState } from 'react'

//indirect firebase functions to firestore access
import http from "../http-common"

//direct firestore access
//import getLanguagesFS from '../firestore'



function Languages() {

    // const [table, setTable] = useState([<table></table>])
    const [row, setRow] = useState()
    const [thead, setTHead] = useState()

    useEffect(() => {
        const retrieveLanguages = async () => {
            await http.get(`/languages`)
                .then((res) => {

                    buildTable(res.data)

                })
                .catch((err) => {
                    setRow(<td>Firebase's database service, Firestore, might be down.  See console for error.</td>)
                    console.error(err)
                })

        }
        retrieveLanguages();

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


    }, [])



    const buildTable = (languages) => {

        // const keys = Object.keys(languages[0])

        // console.log(keys)

        // const confidenceCategory = {}

        // languages.forEach(language => {
        //     confidenceCategory[language.Confidence]=[];
        // });

        // console.log(confidenceCategory)

        // keys.forEach(key => {
        //     console.log(key)
        // });

        const categories = { Novice: [], "Advanced Beginner": [], Competent: [], Proficient: [], Expert: [] }
        languages.forEach(({ Name, Confidence }) => {
            // console.log(`Title: ${Title}; Confidence: ${Confidence}`)
            categories[Confidence].push(Name)
        })
        // console.log(categories)

        const thead = []
        const row = []
        let key2 = 0

        for (const category in categories) {
            thead.push(<th key={key2++}>{category}</th>)
            // console.log(categories[category])
            // table.push(<th>{category}</th>)
            const titles = []
            let key1 = 0
            categories[category].forEach(title => {
                titles.push(<li key={key1++}>{title}</li>)
            })

            row.push(<td key={key2}><ul key={key2++}>{titles}</ul></td>)
        }
        // console.log(row)
        // console.log(thead)
        setTHead(thead)
        setRow(row)
        // setTable(<table><thead>{thead}</thead><tbody><tr>{row}</tr></tbody></table>)
    }


    return (
        // {table}
        <div className='Languages'>
            <table>
                <caption>
                    Languages
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
        </div>
    )
}

export default Languages