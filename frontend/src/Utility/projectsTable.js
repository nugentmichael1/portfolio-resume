//Utility function that builds a table with projects data

//images
// import gitHubMark from "../Assets/github-mark.png"
import gitHubMarkWhite from "../Assets/github-mark-white.png"

//Returns UL with LIs from nested lists
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


//exported function
const projectsTable = (projects) => {

    const tbody = []

    //react requirement for arrays of elements
    let rowKey = 0

    //decides classname
    let even = true

    projects.forEach(({ Title, Subject, Emphasized_Concepts, Notes, Demo, GitHub }) => {

        const row = []

        let evenOddClassName = even ? "even" : "odd"

        
        // const gitHubImageSrc = !even ? gitHubMark : gitHubMarkWhite

        //react requirement for arrays of elements
        let key = 0

        row.push(<td key={key++}><a href={Demo} target="_blank" rel='noreferrer'>{Title}</a></td>)
        row.push(<td key={key++}>{Subject}</td>)
        row.push(<td key={key++}>{nestedLists(Emphasized_Concepts)}</td>)
        // row.push(<td key={key++}>{Notes}</td>)
        // row.push(<td key={key++}><a href={Demo} target="_blank" rel='noreferrer'>{Demo}</a></td>)

        //GitHub
        //old version: no logo, just url
        // let shortURL = GitHub.slice(33)
        // row.push(<td key={key++}><a href={GitHub} target="_blank" rel='noreferrer'>{shortURL}</a></td>)
        //new version: logo, no url displayed
        row.push(<td key={key++} className="gitHub"><a href={GitHub} target="_blank" rel='noreferrer'><img src={gitHubMarkWhite} className="gitHubMark" alt="GitHub mascot - Click to view project repository" /></a></td>)

        tbody.push(<tr key={rowKey++} className={evenOddClassName}>{row}</tr>)

        //update even/odd class for next iteration
        even = 1 - even
    });


    return tbody
}

export default projectsTable