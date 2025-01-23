import React from 'react'

const Icons = ({ text, icon, color }) => {
  return (
    <div className='flex justify-start items-center pl-10'>
      {!icon  ? <div className='border-2 w-full h-4/6'></div> : null}
      {icon && (
        <img
          src={`data:image/svg+xml;utf8,${icon}`}
          alt={text}
          className='w-[50px]'
        />
      )}
      <span className='ml-2' style={{ color: color }}>{text}</span>
    </div>
  )
}

export default Icons