import React from 'react'

import buildSkillsTBody from '../../Utility/buildSkillsTBody'

const SEData = {
    "Architecture": ["MVC", "Publisher / Subscriber", "Composite"],
    "Design": ["Cohesion / Coupling", "SOLID Principles"],
    "Testing": ["Coverage", "Black Box", "White Box"],
    "UML Diagrams": ["Use Case", "Sequence", "Class"]
}
//                 Software Requirements Specifications (SRS)
//                 Agile / Scrum / XP



function SoftwareEngineering() {

    return (
        < table id='SoftwareEngineering' >
            <caption>
                <h4>
                    Software Engineering
                </h4>
            </caption>
            {buildSkillsTBody(SEData)}
        </table >
    )
}

export default SoftwareEngineering