import React from 'react'

const Icons = ({ text, icon, color }) => {
  return (
    <div className='flex justify-start items-center pl-10'>
      {!icon  ? <div className='border-2 w-full h-4/6'></div> : null}
      {icon && (
        <img
          src={icon}
          alt={text}
          className='w-[50px]'
        />
      )}
      <span 
        className='ml-2 text-clip text-wrap' 
        style={{
          color: color,
          display: 'inline-block',
          overflow: 'hidden',
          whiteSpace: 'normal',
          wordWrap: 'break-word',
        }}
      >
        {text?.slice(0, 36)}
      </span>
    </div>
  )
}

export default Icons