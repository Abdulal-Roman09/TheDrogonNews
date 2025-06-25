import React from 'react'
import Marquee from "react-fast-marquee";
const Marquees = () => {
  return (
    <div>
    <Marquee speed={100} className='my-5 font-semibold container'>
  I can be a React component, multiple React components, or just some text.
  I can be a React component, multiple React components, or just some text.
  I can be a React component, multiple React components, or just some text.
</Marquee>
    </div>
  )
}

export default Marquees
