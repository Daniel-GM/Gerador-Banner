import React from 'react'

const Icons = ({ text, icon, color = "#000" }) => {
  return (
    <div className='flex justify-start items-center pl-10 w-11/12'>
      {!icon ? <div className='border-2 w-full h-4/6'></div> : null}
      {icon && (
        <img
          src={icon}
          alt={text}
          className='w-[25px]'
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
          fontFamily: 'Poppins',
          fontWeight: '400',
          fontSize: '20px',
          lineHeight: '1',
        }}
      >
        {text?.slice(0, 30)}
      </span>
    </div>
  )
}

export default Icons