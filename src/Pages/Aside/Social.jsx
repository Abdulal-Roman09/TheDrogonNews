import React from 'react'
import { FaGitAlt, FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'


const Social = () => {
  return (
    <div className='text-center my-5 space-y-5'>
      <button className='flex items-center gap-2 justify-center btn text-blue-400 bg-base-100 px-10'><FcGoogle size={25}/>
        Logn with Google</button>
      <button className='flex items-center gap-2 justify-center btn text-blue-400 bg-base-100 px-10'><FaGithub size={25} color='black'/>
        Logn with Github</button>
    </div>
  )
}

export default Social
