//Uses an object to create table body.  Used in skills page components.

const buildSkillsTBody = (obj) => {

    const headerCells = []
    const trs = []

    let oddXorEven = 'odd'

    const keys = Object.keys(obj)


    //th cells
    keys.forEach((category) => {
        headerCells.push(
            <th key={category} className={oddXorEven}>{category}</th>
        )
    });


    //find longest category
    let longest = 0
    keys.forEach((key) => {
        if (obj[key].length > longest) longest = obj[key].length
    })



    for (let i = 0; i < longest; i++) {
        const tds = []

        keys.forEach(
            (category) => tds.push(<td key={category}>
                {obj[category][i]}
            </td>)
        )
        // console.log(tds)

        trs.push(<tr key={i} className={oddXorEven}>{tds}</tr>)
        oddXorEven = (oddXorEven === 'odd') ? 'even' : 'odd'
    }



    return <tbody>
        <tr>
            {headerCells}
        </tr>
        {trs}
    </tbody>
}

export default buildSkillsTBody;