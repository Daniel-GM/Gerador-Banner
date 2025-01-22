import React from 'react'
import Icons from './Icons'

const GridIcons = () => {
  return (
    <section className='bg-blue-500 grid grid-cols-2 grid-rows-2 h-2/6'>
        <Icons icon='+' text='Icon 1' />
        <Icons icon='+' text='Icon 2' />
        <Icons icon='+' text='Icon 3' />
        <Icons icon='+' text='Icon 4' />
    </section>
  )
}

export default GridIcons