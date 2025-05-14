import { useState } from 'react'
import './Rhombus.css'
import RhombusItem from './RhombusItem'

const Rhombus = () => {
  const RHOMBUS_CONFIG = [
    { id: 'rhombus1', top: '0px', left: '65px', sizeFather: '40', sizeChildren: '36'  },
    { id: 'rhombus2', top: '130px', left: '-8px', sizeFather: '44', sizeChildren: '40'  },
    { id: 'rhombus3', top: '20px', left: '180px', sizeFather: '72', sizeChildren: '64'  },
    { id: 'rhombus4', top: '175px', left: '415px', sizeFather: '36', sizeChildren: '32'  }
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