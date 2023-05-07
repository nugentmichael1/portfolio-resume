import React from 'react'

function MaskExperiment() {
    return (
        <div className='maskExperiment'>
            <div className='videoMaskWrapper'>
                <video className='natureVideo' controls={false} loop autoPlay={true} playsInline muted>
                    <source src="https://cdn.coverr.co/videos/coverr-foamy-ocean-waves-at-night-2122/1080p.mp4" />
                </video>
                <svg viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <mask id="mask" x="0" y="0" width="100%" height="100%" >
                            <rect x="0" y="0" width="100%" height="100%" />
                            <text x="0" y="40">Michael Nugent</text >
                        </mask>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" />
                </svg>
            </div>
        </div>
    )
}

export default MaskExperiment