import React from 'react'

function MaskExperiment() {
    return (
        <div>
            <div className='videoMaskWrapper'>
                <video className='natureVideo' controls={false} loop autoPlay={true} playsInline muted>
                    <source src="https://cdn.coverr.co/videos/coverr-doing-a-workout-in-the-mountains-8121/1080p.mp4" />
                </video>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <mask id="mask" x="0" y="0" width="100%" height="100%" >
                            <rect x="0" y="0" width="100%" height="100%" />
                            <text x="0" y="80">Michael Nugent</text >
                        </mask>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" />
                </svg>
            </div>
        </div>
    )
}

export default MaskExperiment