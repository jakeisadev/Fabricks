import React from 'react'
import Payment from './payment'

function Home() {
  return (
    <div>
      <ul>
        <li linkto="/" component={Payment}>Home</li>
        </ul>
    </div>
  )
}

export default Home