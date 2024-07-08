// Function for Work Experience to format date appropriately

const createMonthYearStr = (seconds) => {

    const dateObj = new Date(seconds * 1000)

    //0-based index requires incrementation of 1
    const month = dateObj.getMonth() + 1

    const year = dateObj.getFullYear()

    return <>{month}/{year}</>
}

export default createMonthYearStr