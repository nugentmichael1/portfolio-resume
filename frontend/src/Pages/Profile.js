import React from "react";

//css
import "../CSS/Profile.css"

function Profile() {
    return (
        <div className='profile'>
            <h1>Michael Nugent</h1>
            <h2>Entry-Level Software Engineer</h2>

            <h3>Summary</h3>
            {/* Turn this into sections */}
            <p id="summary">Recent BS Computer Science graduate demonstrates competency through:
                <ol>
                    <li>Education: Multiple high-quality academic
                        projects:   with electives in databases, web development, software engineering, and
                        artificial intelligence.
                    </li>

                    <li>
                        Decade of general work experience.
                    </li>
                </ol>
            </p>
        </div>
    )

};

export default Profile