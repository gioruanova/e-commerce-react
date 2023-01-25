import React from 'react'

const MainContainer = ({ initialWelcome }) => {
  return (
    <div className='mainContainer'>
      <h1>{initialWelcome}</h1>
      <h2>H2 - Title</h2>
      <h3>H3 - Title</h3>
      <h4>H4 - Title</h4>
      <h5>H5 - Title</h5>
      <p>P - Title</p>
      <a href="/">A Tag</a>
    </div>
  )
}

export default MainContainer