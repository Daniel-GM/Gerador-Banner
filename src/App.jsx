import { useState } from 'react'
import Banner from './assets/components/Banner'
import IconOptions from './assets/components/IconOptions'
import { toPng } from 'html-to-image'
import SelectLogo from './assets/components/SelectLogo'
import ColorMenu from './assets/components/ColorMenu'

function App() {
  const maxLength = 36
  const [color, setColor] = useState('#097269')
  const [selectedImage, setSelectedImage] = useState(null)
  const [logoMenu, setLogoMenu] = useState('./menu-w.png')
  const [iconOptions, setIconOptions] = useState([
    { id: 1, icon: '', text: '', sugestion: "Ex: Pizza" },
    { id: 2, icon: '', text: '', sugestion: "Ex: Refrigerante" },
    { id: 3, icon: '', text: '', sugestion: "Ex: @SeuInstagram" },
    { id: 4, icon: '', text: '', sugestion: "Ex: Local do restaurante" }
  ])

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setSelectedImage(imageUrl)
    }
  }

  const handleIconOptionChange = (index, { icon, text }) => {
    setIconOptions(prevOptions => {
      const newOptions = [...prevOptions]
      newOptions[index] = { icon, text }
      return newOptions
    })
  }

  const handleDownload = () => {
    const bannerElement = document.getElementById('banner')

    const originalStyle = {
      width: bannerElement.style.width,
      height: bannerElement.style.height,
    }

    bannerElement.style.width = '1280px'
    bannerElement.style.height = '333px'

    toPng(bannerElement)
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'cardapio.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.error('Erro ao gerar a imagem:', err)
      })
      .finally(() => {
        bannerElement.style.width = originalStyle.width
        bannerElement.style.height = originalStyle.height
      })
  }

  const handleColorMenuChange = (newColor) => {
    setColor(newColor)
  }

  return (
    <div className="min-h-screen bg-gray-900 h-full">
      <div className="container mx-auto p-6 h-full">
        <div className="grid grid-cols-1 h-full">
          {/* Banner */}
          <div className="space-y-4 bg-gray-800/50 p-6 border-gray-700 border-2 rounded-lg shadow-sm mt-6 grid justify-center items-center">
            <Banner color={color} options={iconOptions} image={selectedImage} menu={logoMenu} />
            <button
              children="Baixar Banner"
              className="bg-emerald-600 text-white p-4 rounded-lg mt-6"
              onClick={handleDownload}
            />
          </div>

          {/* Config */}
          <div className="space-y-4 bg-gray-800/50 p-6 border-gray-700 border-2 rounded-lg shadow-sm mt-6">
            <h1 className="text-3xl text-white font-semibold">Configurações</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left */}
              <div className="space-y-4 grid grid-cols-1 bg-gray-900/50 p-6 border-gray-700 border-2 rounded-lg">
                {[0, 1].map((rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {iconOptions.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => (
                      <IconOptions
                        key={index}
                        id={rowIndex * 2 + index + 1}
                        sugestion={item.sugestion}
                        onChange={(data) => handleIconOptionChange(rowIndex * 2 + index, data)}
                        maxLength={maxLength}
                      />
                    ))}
                  </div>
                ))}
              </div>
              {/* Right */}
              <div className="flex flex-col bg-gray-900/50 p-6 border-gray-700 border-2 rounded-lg gap-6">
                {/* Color title and logo menu (sigesis) */}
                <div className="flex flex-row space-y-2 items-end gap-6">
                  {[
                    <ColorMenu color={color} handleColorMenuChange={handleColorMenuChange} />,
                    <SelectLogo onChange={(image) => setLogoMenu(image)} />
                  ].map((component, index) => (
                    <div key={index} className='flex flex-col w-full space-y-2'>
                      {component}
                    </div>
                  ))}
                </div>
                {/* Background Image */}
                <div className="flex flex-col space-y-4">
                  <label className="text-white text-2xl">Imagem de Fundo</label>
                  <input
                    id="bg-image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                  <div
                    className="bg-white w-full h-12 rounded-lg text-center flex justify-center items-center cursor-pointer"
                    onClick={() => document.getElementById("bg-image").click()}
                  >
                    <label htmlFor="bg-image" className="text-gray-800">
                      Selecione uma Imagem
                    </label>
                  </div>
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Imagem de Fundo Selecionada"
                      className="w-full h-32 object-cover rounded-lg cursor-pointer"
                      onClick={() => document.getElementById("bg-image").click()}
                    />
                  ) : (
                    <img
                      src="/mercado.jpg"
                      alt="Imagem de Fundo"
                      className="w-full h-32 object-cover rounded-lg cursor-pointer"
                      onClick={() => document.getElementById("bg-image").click()}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App