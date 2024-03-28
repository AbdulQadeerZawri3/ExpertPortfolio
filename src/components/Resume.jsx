import React from 'react'
import Contactus from './Contactus'

function Resume() {
  return (<>
    <div className=' h-full mt-[10%] items-center justify-center flex-col w-[90%] mx-auto mb-[9%]'>
        <h2 className='md:text-7xl text-5xl py-4'>Resume </h2>
        <h2 className='text-2xl'>Full CV can be found
        <a href="/resume.pdf" className=' italic underline px-2 ' download={true} target='_blank' rel='noreferrer'>here</a>
             </h2>
    </div>
   <Contactus/>
</>
  )
}

export default Resume