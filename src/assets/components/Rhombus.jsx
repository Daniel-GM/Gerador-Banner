import { useState } from 'react'
import './Rhombus.css'
import RhombusItem from './RhombusItem'

const Rhombus = () => {
  const RHOMBUS_CONFIG = [
    { id: 'rhombus1', top: '0px', left: '65px', sizeFather: '10rem', sizeChildren: '9rem',  },
    { id: 'rhombus2', top: '130px', left: '-8px', sizeFather: '11rem', sizeChildren: '10rem',  },
    { id: 'rhombus3', top: '20px', left: '180px', sizeFather: '18rem', sizeChildren: '16rem',  },
    { id: 'rhombus4', top: '175px', left: '415px', sizeFather: '9rem', sizeChildren: '8rem',  }
  ]

  const [imageRhombus, setImageRhombus] = useState({
    rhombus1: null,
    rhombus2: null,
    rhombus3: null,
    rhombus4: null,
  })

  const handleImageChange = (event, rhombusKey) => {
    const file = event.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImageRhombus((prev) => ({
        ...prev,
        [rhombusKey]: imageUrl,
      }))
    }
  }

  return (
    <>
      {RHOMBUS_CONFIG.map((config, index) => (
        <RhombusItem key={index} config={config} imageRhombus={imageRhombus} handleImageChange={handleImageChange} />
      ))}
    </>
  )
}

export default Rhombus