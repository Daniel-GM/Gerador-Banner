import { useState, useEffect } from 'react'
import GridIcons from './GridIcons'
import Title from './Title'
import Rhombus from './Rhombus'

const Banner = ({ color, options, image, menu, linearGradient, transparent, rhombusConfig, imageRhombus, setImageRhombus, colorRhombus, positionGradient, positionBackground, layout = "default" }) => {
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
          id={layout === "default" ? "banner" : ""}
          className={`${layout === "default" ? "w-[1280px] h-[333px]" : "w-[640px] h-[166.5px]"} relative bg-cover bg-center font-poppins`}
          style={{
            backgroundImage: `linear-gradient(${positionGradient}, ${linearGradient}${transparent}, transparent), ${image ? `url(${image})` : 'url(/mercado.jpg)'
              }`,
            backgroundSize: `${parseInt(positionBackground.size) + 45}% 100%`,
            backgroundPosition: `${parseInt(positionBackground.position) + 100}%`,
            backgroundRepeat: 'no-repeat',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          <img
            src={menu}
            alt='menu sigesis'
            className={`absolute ${layout === "default" ? "w-[200px]" : "w-[100px]"} object-cover z-20`}
            style={{
              top: '2%',
              left: '99%',
              transform: 'translate(-100%, 0)',
            }}
          />

          <div
            className={`${layout === "default" ? "w-[1280px] h-[333px]" : "w-[640px] h-[166.5px]"} bg-white`}
            style={{ clipPath: 'polygon(0 0, 55% 0, 92% 100%, 0% 100%)' }}
          ></div>

          {layout === "default" && 
          <div className='grid grid-cols-2 absolute top-0 left-0 w-full h-full'>
            <div className=''>
              <Title color={color} layout={layout} />
              <GridIcons options={options} layout={layout} />
            </div>
            <div className='tag-wrap relative'>
              {rhombusConfig.map((config, key) => (
                <Rhombus 
                  layout={layout}
                  key={key} 
                  config={config} 
                  imageRhombus={imageRhombus} 
                  setImageRhombus={setImageRhombus} 
                  colorRhombus={colorRhombus}
                />
              ))}
            </div>
          </div>
          }
        </div>
      </div>
    </>
  )
}

export default Banner