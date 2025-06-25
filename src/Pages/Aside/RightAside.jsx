import React from 'react'
import Social from './Social'

const RightAside = () => {
  return (
    <div className='text-center mx-auto flex flex-col space-y-4 justify-center items-center'>
      <h1 className='text-2xl font-semibold'>Login With</h1>
      <Social></Social>
    </div>
  )
}

export default RightAside
