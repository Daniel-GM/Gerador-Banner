import React from 'react'
import Icons from './Icons'

const GridIcons = () => {
  return (
    <section className='grid grid-cols-2 grid-rows-2 h-2/6'>
        <Icons text='Icon 1' />
        <Icons text='Icon 2' />
        <Icons text='Icon 3' />
        <Icons text='Icon 4' />
    </section>
  )
}

export default GridIcons