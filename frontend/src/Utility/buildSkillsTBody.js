//Uses an object to create table body.  Used in skills page components.

const buildSkillsTBody = (obj) => {

    const headerCells = []
    const dataCells = []

    Object.keys(obj).forEach((category) => {
        headerCells.push(
            <th key={category}>{category}</th>
        )

        const li = []

        obj[category].forEach((element) => {
            li.push(
                <li key={element}>{element}</li>
            )
        })

        dataCells.push(
            <td key={category}><ul>{li}</ul></td>
        )

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