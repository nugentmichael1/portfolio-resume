// Function for Work Experience to format date appropriately

const createMonthYearStr = (seconds) => {

    const dateObj = new Date(seconds * 1000)

    const month = dateObj.getMonth()

    const year = dateObj.getFullYear()

    return <>{month}/{year}</>
}

export default createMonthYearStr