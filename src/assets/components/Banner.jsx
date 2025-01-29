import { useState, useEffect } from 'react'
import GridIcons from './GridIcons'
import Title from './Title'
import Rhombus from './Rhombus'

const Banner = ({ color, options, image, menu }) => {
  const [isOverflowing, setIsOverflowing] = useState(false)

  useEffect(() => {
    const divOverflow = document.getElementById('divOverflow')
    setIsOverflowing(divOverflow.scrollWidth > divOverflow.clientWidth)
  }, [])

  return (
    <>
      {isOverflowing && (
        <div className='bg-yellow-400 p-6 rounded-lg shadow-lg'>
          <p className='text-lg text-gray-800 font-bold'>
            A tela está pequena para o conteúdo. Use o scroll horizontal para navegar. (SHIFT + scroll)
          </p>
        </div>
      )}
      <div id='divOverflow' className='overflow-auto w-full h-full'>
        <div
          id="banner"
          className='w-[1280px] h-[333px] relative bg-cover bg-center'
          style={{
            backgroundImage: `linear-gradient(to top, #ffffff80, transparent), ${image ? `url(${image})` : 'url(/mercado.jpg)'}`,
            backgroundSize: '50% 100%',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <img
            src={menu}
            alt='menu sigesis'
            className='absolute w-[200px] object-cover z-20'
            style={{
              top: '2%',
              left: '99%',
              transform: 'translate(-100%, 0)',
            }}
          />

          <div
            className='w-[1280px] h-[333px] bg-white'
            style={{ clipPath: 'polygon(0 0, 55% 0, 92% 100%, 0% 100%)' }}
          ></div>

          <div className='grid grid-cols-2 absolute top-0 left-0 w-full h-full'>
            <div className=''>
              <Title color={color} />
              <GridIcons options={options} />
            </div>
            <div className='relative'>
              <Rhombus />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner