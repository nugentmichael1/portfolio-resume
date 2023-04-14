import React from 'react'

import buildSkillsTBody from '../../Utility/buildSkillsTBody'

const SEData = {
    "Design": ["Cohesion / Coupling", "SOLID Principles"],
    "Testing": ["Coverage"],
    "UML Diagrams": ["Use Case", "Sequence", "Class"]
}
//                 Software Requirements Specifications (SRS)
//                 Agile / Scrum / XP



function SoftwareEngineering() {

    return (
        < table id='SoftwareEngineering' >
            <caption>
                <h3>
                    Software Engineering
                </h3>
            </caption>
            {buildSkillsTBody(SEData)}
        </table >
    )
}

export default SoftwareEngineering