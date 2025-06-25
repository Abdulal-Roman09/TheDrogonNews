import React from 'react'
import Logo from '../assets/logo.png'
import { format } from 'date-fns'
import Marquees from './Marquees'

const Navber = () => {
  return (
    <div className='my-10  flex items-center justify-center'>
      <div className='text-center flex flex-col items-center'>
        <img className='mx-auto mt-10' src={Logo} alt="" />
        <p className='text-accent'>Journalism Without Fear or Favour</p>
        <p>
          {format(new Date(), "EEEE, MMMM d, yyyy")}
        </p>
        <div className='flex items-center  bg-base-300 px-2 rounded-xl gap-5'>
          <button className='btn btn-secondary'>Letest</button>
          <Marquees ></Marquees>
        </div>
      </div>
      
    </div>
  )
}

export default Navber