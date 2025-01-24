import GridIcons from './GridIcons'
import Title from './Title'
import Rhombus from './Rhombus'

const Banner = ({ color, options, image, menu }) => {

  return (
    <>
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
            <GridIcons options={options} color={color} />
          </div>
          <div className='relative'>
            <Rhombus />
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner