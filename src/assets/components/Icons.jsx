import React from 'react'

const Icons = ({ text, icon }) => {
  return (
    <div className='flex justify-start items-center pl-10'>
        {icon}
        {text}
    </div>
  )
}

export default Icons