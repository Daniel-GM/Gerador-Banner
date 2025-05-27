import { useState } from 'react'

const SelectLogo = ({ onChange }) => {
  const [selectedImage, setSelectedImage] = useState('white')

  const handleImageChange = (event) => {
    const color = event.target.value === 'white' ? './menu-w.png' : './menu-b.png'
    setSelectedImage(event.target.value)
    onChange(color)
  }

  return (
    <>
      <label className='text-white text-2xl flex-1'>Cor menu</label>
      <div className="flex gap-4">
        {/* Botão Branco */}
        <label
          htmlFor="white"
          className={`w-7 h-7 rounded-full border-2 ${selectedImage === 'white' ? 'border-emerald-600' : 'border-gray-700'} cursor-pointer bg-white`}
        ></label>
        <input
          id="white"
          type="radio"
          value="white"
          className='hidden'
          checked={selectedImage === 'white'}
          onChange={handleImageChange}
        />

        {/* Botão Preto */}
        <label
          htmlFor="black"
          className={`w-7 h-7 rounded-full border-2 ${selectedImage === 'black' ? 'border-emerald-600' : 'border-gray-700'
            } cursor-pointer bg-black`}
        ></label>
        <input
          id="black"
          type="radio"
          value="black"
          className='hidden'
          checked={selectedImage === 'black'}
          onChange={handleImageChange}
        />
      </div>
    </>
  )
}

export default SelectLogo