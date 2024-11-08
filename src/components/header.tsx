import React from 'react'
import Image from 'next/image'
export default function Header() {
  return (
    <div className='flex mt-8 ml-3 header bg-white text-black'>
        <div className=''>
      <h2 className='mt-10 mb-2 ml-20'>Branding/Image Making</h2>
      <h1 className='ml-20 text-5xl font-bold'>Visual Designer</h1>
      <p className='ml-20'>This is a Figma Template File turned into code using Nextjs Framework</p>
    <input type="button" value="Contact" className='bg-black ml-20 mt-5 mb-5 text-white px-7 py-3'/>
    </div>
    <div className='mt-3 '>
    <Image src="/images/HeaderImage 1.png"  alt='image' width={300} height={300}/>
    </div>
    </div> 
  )
}
