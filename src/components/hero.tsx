import React from 'react'
import Image from 'next/image'
import Header from './header'
import SkillSection from './SkillSection'
export default function Hero() {
  return (
    <div className='bg-gray-600 text-white git initflex pl-4'>
      <div className='text-5xl text-white  pt-16 ml-10 font-semibold '><h1>Portfolio </h1>Template
      <br /><br />
      <Image src="/images/Line 1.png" alt="line" width={200} height={100} />
      <br />
      <div className='text-3xl text-white'>
        <p>Export Your <br />design to HTML <br /> code </p>
      </div> <br />
      <div className='mt-10 ml-2'>
        <Image src="/images/Group.png" alt="htmljspic" width={200} height={300} />
      </div>
    </div>
      <div className=''>
        <Header />
        <SkillSection />
      </div>
    </div>
  )
}
