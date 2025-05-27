import { useState } from 'react'
import './Rhombus.css'

const Rhombus = () => {
  const RHOMBUS_CONFIG = [
    { id: 'rhombus1', top: '0px', left: '65px', sizeFather: '10rem', sizeChildren: '9rem', },
    { id: 'rhombus2', top: '130px', left: '-8px', sizeFather: '11rem', sizeChildren: '10rem', },
    { id: 'rhombus3', top: '20px', left: '180px', sizeFather: '18rem', sizeChildren: '16rem', },
    { id: 'rhombus4', top: '175px', left: '415px', sizeFather: '9rem', sizeChildren: '8rem', }
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
      {RHOMBUS_CONFIG.map((config, key) => (
        <div key={key} className='tag-wrap'>
          <div
            className={`rhombus absolute flex items-center justify-center`}
            style={{
              top: config.top,
              left: config.left,
              width: config.sizeFather,
              height: config.sizeFather
            }}
          >
            <input
              id={config.id}
              type="file"
              className="hidden"
              onChange={(e) => handleImageChange(e, config.id)}
            />
            <div
              onClick={() => document.getElementById(config.id).click()}
              className={`rhombus relative cursor-pointer`}
              style={{
                backgroundImage: imageRhombus[config.id]
                  ? `url(${imageRhombus[config.id]})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: config.sizeChildren,
                height: config.sizeChildren
              }}
            >
              {!imageRhombus[config.id] && (
                <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-center">
                  Adicione uma imagem
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Rhombus