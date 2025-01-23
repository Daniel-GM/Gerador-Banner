import { useState } from 'react'
import Banner from './assets/components/Banner'
import IconOptions from './assets/components/IconOptions'
import { Placeholder } from 'react-select/animated';

function App() {
  const [color, setColor] = useState('#097269')
  const [selectedImage, setSelectedImage] = useState(null);
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

  return (
    <div className="min-h-screen bg-gray-900 h-full">
      <div className="container mx-auto p-6 h-full">
        <div className="grid grid-cols-1 h-full">
          <div className="space-y-4 bg-gray-800/50 p-6 border-gray-700 border-2 rounded-lg shadow-sm mt-6 grid justify-center items-center">
            <Banner color={color} options={iconOptions} image={selectedImage} />
          </div>
          <div className="space-y-4 bg-gray-800/50 p-6 border-gray-700 border-2 rounded-lg shadow-sm mt-6">
            <h1 className="text-3xl text-white font-semibold">Configurações</h1>
            {/* config */}
            <div className="grid grid-cols-2">
              <div className='space-y-4 grid grid-cols-1 bg-gray-900/50 p-6 border-gray-700 border-2 rounded-lg mx-2'>
                <div className='grid grid-cols-2'>
                  <IconOptions id={1} sugestion={"Ex: Pizza"} onChange={(data) => handleIconOptionChange(0, data)} />
                  <IconOptions id={2} sugestion={"Ex: Refrigerante"} onChange={(data) => handleIconOptionChange(1, data)} />
                </div>
                <div className='grid grid-cols-2'>
                  <IconOptions id={3} sugestion={"Ex: @SeuInstagram"} onChange={(data) => handleIconOptionChange(2, data)} />
                  <IconOptions id={4} sugestion={"Ex: Local do restaurante"} onChange={(data) => handleIconOptionChange(3, data)} />
                </div>
              </div>
              <div className='space-y-6 flex flex-col justify-start  bg-gray-900/50 p-6 border-gray-700 border-2 rounded-lg mx-2'>
                <div className='flex flex-col space-y-2'>
                  <label className='text-white text-xl'>Cor do Cardápio</label>
                  <input
                    type="color"
                    value={color}
                    className='rounded-lg border-2 w-full border-gray-300'
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
                <div className='flex flex-col  space-y-2'>
                  <label className='text-white text-xl'>Imagem de Fundo</label>
                  <input
                    id="bg-image"
                    type="file"
                    accept="image/*"
                    className='hidden'
                    onChange={handleImageChange}
                  />
                  <div
                    className='bg-white w-full h-16 rounded-lg text-center flex justify-center items-center cursor-pointer'
                    onClick={() => document.getElementById("bg-image").click()}
                  >
                    <label htmlFor="bg-image" className='text-gray-800'>Selecione uma Imagem</label>
                  </div>
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt='Imagem de Fundo Selecionada'
                      className='w-full h-32 object-cover rounded-lg cursor-pointer'
                      onClick={() => document.getElementById("bg-image").click()}
                    />
                  ) : (
                    <img
                      src='/mercado.jpg'
                      alt='Imagem de Fundo'
                      className='w-full h-32 object-cover rounded-lg cursor-pointer'
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