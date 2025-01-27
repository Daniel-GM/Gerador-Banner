import { useState } from 'react'
import Banner from './assets/components/Banner'
import IconOptions from './assets/components/IconOptions'
import { toPng } from 'html-to-image'
import SelectLogo from './assets/components/SelectLogo'

function App() {
  const [color, setColor] = useState('#097269')
  const [selectedImage, setSelectedImage] = useState(null);
  const [logoMenu, setLogoMenu] = useState('./menu-w.png');
  const [iconOptions, setIconOptions] = useState([
    { icon: '', text: '' },
    { icon: '', text: '' },
    { icon: '', text: '' },
    { icon: '', text: '' }
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
        console.error('Erro ao gerar a imagem:', err);
      })
      .finally(() => {
        bannerElement.style.width = originalStyle.width
        bannerElement.style.height = originalStyle.height
      })
  }

  return (
    <div className="min-h-screen bg-gray-900 h-full">
      <div className="container mx-auto p-6 h-full">
        <div className="grid grid-cols-1 h-full">
          <div className="space-y-4 bg-gray-800/50 p-6 border-gray-700 border-2 rounded-lg shadow-sm mt-6 grid justify-center items-center">
            <Banner color={color} options={iconOptions} image={selectedImage} menu={logoMenu} />
            <button
              children="Baixar Banner"
              className="bg-emerald-600 text-white p-4 rounded-lg mt-6"
              onClick={handleDownload}
            />
          </div>
          <div className="space-y-4 bg-gray-800/50 p-6 border-gray-700 border-2 rounded-lg shadow-sm mt-6">
            <h1 className="text-3xl text-white font-semibold">Configurações</h1>
            {/* config */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* left */}
              <div className="space-y-4 grid grid-cols-1 bg-gray-900/50 p-6 border-gray-700 border-2 rounded-lg mx-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <IconOptions id={1} sugestion={"Ex: Pizza"} onChange={(data) => handleIconOptionChange(0, data)} />
                  <IconOptions id={2} sugestion={"Ex: Refrigerante"} onChange={(data) => handleIconOptionChange(1, data)} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <IconOptions id={3} sugestion={"Ex: @SeuInstagram"} onChange={(data) => handleIconOptionChange(2, data)} />
                  <IconOptions id={4} sugestion={"Ex: Local do restaurante"} onChange={(data) => handleIconOptionChange(3, data)} />
                </div>
              </div>
              {/* right */}
              <div className="space-y-6 flex flex-col justify-start bg-gray-900/50 p-6 border-gray-700 border-2 rounded-lg mx-2">
                <div className="flex flex-col space-y-2">
                  <label className="text-white text-xl">Cor do Cardápio</label>
                  <input
                    type="color"
                    value={color}
                    className="rounded-lg border-2 w-full border-gray-300"
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <label className="text-white text-xl">Imagem de Fundo</label>
                  <input
                    id="bg-image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                  <div
                    className="bg-white w-full h-16 rounded-lg text-center flex justify-center items-center cursor-pointer"
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
                  <SelectLogo onChange={(image) => setLogoMenu(image)} />
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