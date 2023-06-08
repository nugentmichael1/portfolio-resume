// Utility function: builds a table body with work experience data


//Utility function to format date
import createMonthYearStr from '../Utility/createMonthYearStr'

const experienceTable = (records) => {

    //create table body
    const tbody = []

    for (const record in records) {

        //establish odd or even record (for css class)
        const oddXorEven = (record % 2 === 0) ? "odd" : "even"

        //create table row
        const tr = []

        //start date
        //properly format
        const monthYearStr_start = createMonthYearStr(records[record].Start._seconds)
        //push onto table row
        tr.push(<td key="start" className="start">{monthYearStr_start}</td>)

        //end date
        //propery format
        const monthYearStr_end = createMonthYearStr(records[record].End._seconds)
        //push onto table row
        tr.push(<td key="end" className="end">{monthYearStr_end}</td>)

        //title
        tr.push(<td key="title" className="title">{records[record].Title}</td>)

        //Company
        tr.push(<td key="company" className="company">{records[record].Company}</td>)

        //Location
        tr.push(<td key="location" className="location">{records[record].Location}</td>)




        //push completed table row into table body
        tbody.push(<tr key={record} className={oddXorEven}>{tr}</tr>)

        //Description
        tbody.push(<tr key={record + "description"} className={oddXorEven}><td className="description" colSpan={5}>{records[record].Description}</td></tr>)

    }


    return <tbody>{tbody}</tbody>
}

export default experienceTable