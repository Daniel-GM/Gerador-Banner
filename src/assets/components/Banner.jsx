import { useState } from 'react'
import GridIcons from './GridIcons'
import Title from './Title'
import Rhombus from './Rhombus'

const Banner = () => {

  return (
    <>
      <img src='/header.png' alt='Banner' className='w-full h-full object-cover' />
      <div
        className='w-[1280px] h-[333px] relative bg-cover bg-center'
        style={{ backgroundImage: `linear-gradient(to top, #ffffff80, transparent), url("mercado.jpg")`, }}
      >
        <div
          className='w-[1280px] h-[333px] bg-white'
          style={{ clipPath: 'polygon(0 0, 55% 0, 92% 100%, 0% 100%)'}}
        ></div>

        <div className='grid grid-cols-2 absolute top-0 left-0 w-full h-full'>
          <div className='bg-red-500'>
            <Title />
            <GridIcons  />
          </div>
          <div className='bg-emerald-500 relative'>
            <Rhombus />
          </div>
        </div>
      </div>
    </>

  )
}

export default Banner