//Uses an object to create table body.  Used in skills page components.

const buildSkillsTBody = (obj) => {

    const headerCells = []
    const dataCells = []

    let oddXorEven = 'odd'

    Object.keys(obj).forEach((category) => {
        headerCells.push(
            <th key={category} className={oddXorEven}>{category}</th>
        )

        const li = []

        let oddXorEven2 = 'odd'

        obj[category].forEach((element) => {
            li.push(
                <li key={element} className={oddXorEven2}>{element}</li>
            )
            oddXorEven2 = (oddXorEven2 === 'odd') ? 'even' : 'odd'

        })

        dataCells.push(
            <td key={category} className={oddXorEven}><ul>{li}</ul></td>
        )

        // oddXorEven = (oddXorEven === 'odd') ? 'even' : 'odd'

    });

    return <tbody>
        <tr>
            {headerCells}
        </tr>
        <tr>
            {dataCells}
        </tr>
    </tbody>
}

export default buildSkillsTBody;