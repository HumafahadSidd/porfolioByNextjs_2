import React from 'react'
import Image from 'next/image'

export default function SkillSection() {
  return (
    <div className='bg-white text-black skills ml-3'>
        <div>
        <h1 className='text-center text-2xl mt-4 mb-6 pt-4'>Latest Work</h1>
        </div>
        <div className='flex flex-wrap justify-center gap-2'>
      <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
        <Image src="/images/Gallery Card.png" alt="pic8" width="200" height="200"/>
      </div>
      <div className='className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ' >
        <Image src="/images/Component 9.png" alt='pic9' width="200" height="200" />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <Image src="/images/Component 11.png" alt='pic10' width="200" height="200" />
      </div>
      <div className='flex justify-center  gap-4'>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <Image src="/images/Component 11.png" alt='pic11' width='200' height='200' />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <Image src="/images/Component 12.png" alt='pic12' width='200'height='200' />
      </div> 
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <Image src="/images/Component 13.png" alt='pic13' width='200' height='200' />
      </div>
      </div>
    </div>
    </div>
  )
}
