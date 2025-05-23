import React from 'react'
import Icons from './Icons'

const GridIcons = ({ options, color, maxLength }) => {
  return (
    <section className=' grid grid-cols-2 grid-rows-2 h-2/6'>
      {options.map((option, index) => (
        <Icons key={index} icon={option.icon} text={option.text} color={color} maxLength={maxLength} />
      ))}
    </section>
  )
}

export default GridIcons