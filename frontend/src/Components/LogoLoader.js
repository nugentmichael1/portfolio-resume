import React from 'react'

//css
import "../CSS/LogoLoader.css"

function LogoLoader() {
  return (
    <div className='logo-loader'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 100 100">
        <text x="10" y="50" font-family="Arial" font-size="30" fill="var(--Color0)">M</text>
        <text x="40" y="50" font-family="Arial" font-size="30" fill="#333">N</text>
        <text x="60" y="50" font-family="Arial" font-size="20" fill="#333">Michael Nugent</text>
      </svg>
    </div>
  )
}

export default LogoLoader