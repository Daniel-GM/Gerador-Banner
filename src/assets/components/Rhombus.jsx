import { useState } from 'react'
import './Rhombus.css'

const Rhombus = () => {
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
      <div className='tag-wrap'>
        <div className='rhombus absolute top-[0px] left-[65px] w-40 h-40 flex items-center justify-center shadow-lg'>
          <input
            id="rhombus1"
            type="file"
            className="hidden"
            onChange={(e) => handleImageChange(e, "rhombus1")}
          />
          <div
            onClick={() => document.getElementById("rhombus1").click()}
            className="rhombus relative cursor-pointer w-36 h-36"
            style={{
              backgroundImage: imageRhombus.rhombus1
                ? `url(${imageRhombus.rhombus1})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!imageRhombus.rhombus1 && (
              <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-center">
                Adicione uma imagem
              </span>
            )}
          </div>
        </div>
      </div>

      <div className='tag-wrap'>
        <div className='rhombus absolute top-[130px] left-[-8px] w-44 h-44 flex items-center justify-center '>
          <input
            id="rhombus2"
            type="file"
            className="hidden"
            onChange={(e) => handleImageChange(e, "rhombus2")}
          />
          <div
            onClick={() => document.getElementById("rhombus2").click()}
            className="rhombus relative cursor-pointer w-40 h-40"
            style={{
              backgroundImage: imageRhombus.rhombus2
                ? `url(${imageRhombus.rhombus2})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!imageRhombus.rhombus2 && (
              <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-center">
                Adicione uma imagem
              </span>
            )}
          </div>
        </div>
      </div>

      <div className='tag-wrap'>
        <div className='rhombus absolute top-[20px] left-[180px] w-72 h-72 flex items-center justify-center '>
          <input
            id="rhombus3"
            type="file"
            className="hidden"
            onChange={(e) => handleImageChange(e, "rhombus3")}
          />
          <div
            onClick={() => document.getElementById("rhombus3").click()}
            className="rhombus relative cursor-pointer w-64 h-64"
            style={{
              backgroundImage: imageRhombus.rhombus3
                ? `url(${imageRhombus.rhombus3})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!imageRhombus.rhombus3 && (
              <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-center">
                Adicione uma imagem
              </span>
            )}
          </div>
        </div>
      </div>

      <div className='tag-wrap'>
        <div className='rhombus absolute top-[175px] left-[415px] w-36 h-36 flex items-center justify-center '>
          <input
            id="rhombus4"
            type="file"
            className="hidden"
            onChange={(e) => handleImageChange(e, "rhombus4")}
          />
          <div
            onClick={() => document.getElementById("rhombus4").click()}
            className="rhombus relative cursor-pointer w-32 h-32"
            style={{
              backgroundImage: imageRhombus.rhombus4
                ? `url(${imageRhombus.rhombus4})`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!imageRhombus.rhombus4 && (
              <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-center">
                Adicione uma imagem
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Rhombus