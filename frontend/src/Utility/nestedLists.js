//Helps break down nested lists

import React from "react"

const nestedLists = (composite) => {

    if (Array.isArray(composite)) {
        const conceptsList = []

        let conceptsKey = 0

        composite.forEach(concept => {

            conceptsList.push(<li key={conceptsKey++}>{nestedLists(concept)}</li>)
        })

        return <ul>{conceptsList}</ul>
    }

    else if (typeof (composite) === "object") {
        const label = Object.keys(composite)[0]

        return [label, ":", nestedLists(composite[label])]
    }

    return composite
}

export default nestedLists;