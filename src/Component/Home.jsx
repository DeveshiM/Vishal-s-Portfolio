
import React from 'react'
import Banner from './Banner'
// import Slider from './slider'
import Client from './ourClient'
import Service from './service'
import Exceptional from './exceptional'

function Home() {
  return (
    <div>
      <Banner/>
      <Service/>
      <Exceptional/>
      <Client/>
      {/* <Slider/> */}
    </div>
  )
}

export default Home