import './index.css'

import { useState } from 'react'
import Banner from './assets/components/Banner'
import IconOptions from './assets/components/IconOptions'
import { toPng } from 'html-to-image'
import SelectLogo from './assets/components/SelectLogo'
import RhombusConfig from './assets/components/RhombusConfig'
import ChangeColor from './assets/components/ChangeColor'
import SelectPositionGradient from './assets/components/SelectPositionGradient'
import InputRange from './assets/components/InputRange'
import { Download, Upload, RotateCcw } from "lucide-react"
import Button from './assets/components/Button'

function App() {
  // constants and states
  const maxLength = 36
  const [color, setColor] = useState('#097269')
  const [selectedImage, setSelectedImage] = useState(null)
  const [linearGradient, setLinearGradient] = useState('#ffffff')
  const [transparentGradient, setTransparentGradient] = useState('80')
  const [logoMenu, setLogoMenu] = useState('./menu-w.png')
  const [positionBackground, setPositionBackground] = useState({ size: 0, position: 0 })
  const [iconOptions, setIconOptions] = useState([
    { id: 1, icon: '', text: '', sugestion: "Ex: Pizza" },
    { id: 2, icon: '', text: '', sugestion: "Ex: Refrigerante" },
    { id: 3, icon: '', text: '', sugestion: "Ex: @SeuInstagram" },
    { id: 4, icon: '', text: '', sugestion: "Ex: Local do restaurante" }
  ])
  const [rhombusArray, setRhombusArray] = useState([
    { id: 'rhombus1', top: '0px', left: '65px', sizeFather: '10rem', sizeChildren: '9rem', positionX: '50%', positionY: '50%', sizeImage: 'cover', mode: 'cover' },
    { id: 'rhombus2', top: '130px', left: '-8px', sizeFather: '11rem', sizeChildren: '10rem', positionX: '50%', positionY: '50%', sizeImage: 'cover', mode: 'cover' },
    { id: 'rhombus3', top: '20px', left: '180px', sizeFather: '18rem', sizeChildren: '16rem', positionX: '50%', positionY: '50%', sizeImage: 'cover', mode: 'cover' },
    { id: 'rhombus4', top: '175px', left: '415px', sizeFather: '9rem', sizeChildren: '8rem', positionX: '50%', positionY: '50%', sizeImage: 'cover', mode: 'cover' }
  ])
  const [imageRhombus, setImageRhombus] = useState({
    rhombus1: null,
    rhombus2: null,
    rhombus3: null,
    rhombus4: null,
  })
  const [colorRhombus, setColorRhombus] = useState('#ffffff')
  const [positionGradient, setPositionGradient] = useState('to top')

  // handlers
  const handlePositionBackgroundChange = (newPosition) => {
    setPositionBackground((prev) => (
      { ...prev, position: newPosition }
    ))
  }

  const handleSizeBackgroundChange = (newSize) => {
    setPositionBackground((prev) => (
      { ...prev, size: newSize }
    ))
  }

  const handleColorRhombusChange = (newColor) => {
    setColorRhombus(newColor)
  }

  const handleModeChange = (index, newObj) => {
    const updated = rhombusArray.map((item) =>
      item.id === index ? { ...item, sizeImage: newObj.sizeImage, mode: newObj.mode } : item
    )
    setRhombusArray(updated)
  }

  const handleSizeImageChange = (index, newSize) => {
    const updated = rhombusArray.map((item) =>
      item.id === index ? { ...item, sizeImage: newSize } : item
    )
    setRhombusArray(updated)
  }

  const handlePositionChange = (index, newPosition, direction) => {
    const updated = rhombusArray.map((item) =>
      (direction === 'x')
        ? item.id === index ? { ...item, positionX: newPosition } : item
        : item.id === index ? { ...item, positionY: newPosition } : item
    )
    setRhombusArray(updated)
  }

  const handleImageRhombusChange = (event, rhombusKey) => {
    const file = event?.target?.files?.[0]

    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImageRhombus((prev) => ({
        ...prev,
        [rhombusKey]: imageUrl,
      }))
    } else {
      setImageRhombus((prev) => ({
        ...prev,
        [rhombusKey]: null,
      }))
    }

    if (event?.target) {
      event.target.value = null
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      console.log("Tipo de arquivo:", file.type)
      if (file.type.startsWith('image/')) {

        const imageUrl = URL.createObjectURL(file)
        setSelectedImage(imageUrl)
      } else {
        alert('Por favor, selecione um arquivo de imagem (ex.: .jpg, .png).')
        setSelectedImage(null)
      }
    }
  }

  const handleGradientChange = (e) => {
    setLinearGradient(e)
  }

  const handleTransparentGradientChange = (e) => {
    const value = Math.round(e)
    const hex = value.toString(16).padStart(2, '0')
    setTransparentGradient(hex)
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

  const handleClickImport = () => {
    const fileInputRef = document.getElementById('importData')
    fileInputRef.click()
  };

  const handleResetConfigurations = () => {
    if (window.confirm('Você realmente deseja resetar as configurações?')) {
      handleColorMenuChange('#097269')
      setLogoMenu('./menu-w.png')
      handleGradientChange('#ffffff')
      handleTransparentGradientChange(128)
      setPositionGradient('to top')
      handleColorRhombusChange('#ffffff')
      handleSizeBackgroundChange(0)
      handlePositionBackgroundChange(0)
    }
  }

  const handleImportConfigurations = async () => {
    const fileInput = document.getElementById('importData')
    const file = fileInput.files[0]
    const data = await file.text()
    try {
      const configurations = JSON.parse(data)

      handleColorMenuChange(configurations.color || '#097269')
      setLogoMenu(configurations.logoMenu || './menu-w.png')
      handleGradientChange(configurations.linearGradient || '#ffffff')
      handleTransparentGradientChange(configurations.transparentGradient || '80')
      setPositionGradient(configurations.positionGradient || 'to top')
      handleColorRhombusChange(configurations.colorRhombus || '#ffffff')
      handleSizeBackgroundChange(configurations.positionBackground.size || 0)
      handlePositionBackgroundChange(configurations.positionBackground.position || 0)
      setIconOptions(configurations.iconOptions || [
        { id: 1, icon: '', text: '', sugestion: "Ex: Pizza" },
        { id: 2, icon: '', text: '', sugestion: "Ex: Refrigerante" },
        { id: 3, icon: '', text: '', sugestion: "Ex: @SeuInstagram" },
        { id: 4, icon: '', text: '', sugestion: "Ex: Local do restaurante" }
      ])
      setRhombusArray(configurations.rhombusArray || [
        { id: 'rhombus1', top: '0px', left: '65px', sizeFather: '10rem', sizeChildren: '9rem', positionX: '50%', positionY: '50%', sizeImage: 'cover', mode: 'cover' },
        { id: 'rhombus2', top: '130px', left: '-8px', sizeFather: '11rem', sizeChildren: '10rem', positionX: '50%', positionY: '50%', sizeImage: 'cover', mode: 'cover' },
        { id: 'rhombus3', top: '20px', left: '180px', sizeFather: '18rem', sizeChildren: '16rem', positionX: '50%', positionY: '50%', sizeImage: 'cover', mode: 'cover' },
        { id: 'rhombus4', top: '175px', left: '415px', sizeFather: '9rem', sizeChildren: '8rem', positionX: '50%', positionY: '50%', sizeImage: 'cover', mode: 'cover' }
      ])
      setImageRhombus(configurations.imageRhombus || {
        rhombus1: null,
        rhombus2: null,
        rhombus3: null,
        rhombus4: null,
      })
      alert('Configurações importadas com sucesso!')
    } catch (error) {
      console.error('Erro ao importar configurações: ', error)
      alert('Erro ao importar configurações. Verifique o formato do arquivo JSON.')
    }
  }

  const handleExportConfigurations = () => {
    const date = new Date()

    const configurations = {
      color,
      logoMenu,
      linearGradient,
      transparentGradient,
      positionGradient,
      positionBackground,
      iconOptions,
      rhombusArray,
      imageRhombus,
      colorRhombus
    }

    const blob = new Blob([JSON.stringify(configurations, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `banner_configurations_${date.getDate()}_${date.getMonth() + 1}_${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gray-900 h-full">
      <div className="container mx-auto p-6 h-full md:w-auto w-full">
        <div className="grid grid-cols-1 h-full">
          {/* Banner */}
          <div className="space-y-4 bg-gray-800/50 p-6 border-gray-700 border-2 rounded-lg shadow-sm mt-6 grid justify-center items-center">
            <Banner color={color} options={iconOptions} image={selectedImage} menu={logoMenu} linearGradient={linearGradient} transparent={transparentGradient} rhombusConfig={rhombusArray} imageRhombus={imageRhombus} setImageRhombus={handleImageRhombusChange} colorRhombus={colorRhombus} positionGradient={positionGradient} positionBackground={positionBackground} />
            <button
              children="Baixar Banner"
              className="bg-emerald-600 text-white p-4 rounded-lg mt-6"
              onClick={handleDownload}
            />
            <div className='flex flex-col md:flex-row gap-4'>
              <Button color={"emerald"} action={handleClickImport} label={"Importar"} icon={<Download className='w-4' />} />
              <Button color={"blue"} action={handleExportConfigurations} label={"Exportar"} icon={<Upload className='w-4' />} />
            </div>
            <input id="importData" type="file" accept=".json" onChange={handleImportConfigurations} className="hidden" />
          </div>

          {/* Config */}
          <div className="space-y-4 bg-gray-800/50 md:p-6 p-3 border-gray-700 border-2 rounded-lg shadow-sm mt-6">
            <h1 className="text-3xl text-white font-semibold">Configurações</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
                {/* Color title, logo menu (sigesis) and Linear gradient */}
                {[0, 1, 2].map((rowIndex) => (
                  <div key={rowIndex} className="flex flex-col md:flex-row mb-4 gap-6">
                    {[
                      <ChangeColor color={color} setColor={handleColorMenuChange} label={"Cor do Cardápio"} />,
                      <SelectLogo onChange={(image) => setLogoMenu(image)} />,
                      <ChangeColor color={linearGradient} setColor={handleGradientChange} label={"Cor do Gradiente"} />,
                      <InputRange value={transparentGradient} setValue={handleTransparentGradientChange} min={0} max={255} mode={""} label={"Transparência do Gradiente"} sistemaNumerico={"hexadecimal"} />,
                      <SelectPositionGradient position={positionGradient} setPosition={setPositionGradient} label={"Posição do Gradiente"} />,
                      <ChangeColor color={colorRhombus} setColor={handleColorRhombusChange} label={"Borda dos Losangos"} />,
                    ].slice(rowIndex * 2, rowIndex * 2 + 2).map((component, index) => (
                      <div key={index} className='flex flex-col w-full gap-2'>
                        {component}
                      </div>
                    ))}
                  </div>
                ))}

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
                  <Banner color={color} options={iconOptions} image={selectedImage} menu={logoMenu} linearGradient={linearGradient} transparent={transparentGradient} rhombusConfig={rhombusArray} imageRhombus={imageRhombus} setImageRhombus={handleImageRhombusChange} colorRhombus={colorRhombus} positionGradient={positionGradient} positionBackground={positionBackground} layout={"view"} />
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <InputRange value={positionBackground.size} setValue={handleSizeBackgroundChange} min={0} max={100} mode={"%"} label={"Largura"} />
                    <InputRange value={positionBackground.position} setValue={handlePositionBackgroundChange} min={0} max={100} mode={"%"} label={"Posição X"} />
                  </div>
                </div>
                {/* reset, import and export */}
                <div className='flex flex-col gap-4'>
                  <Button color={"red"} action={handleResetConfigurations} label={"Reset"} icon={<RotateCcw className='w-4' />} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:gap-8 gap-4">
              <div className="md:space-y-4 space-y-1 grid grid-cols-1 bg-gray-900/50 md:p-6 p-3 border-gray-700 border-2 rounded-lg">
                <h1 className="text-3xl text-white font-semibold">Configuração dos losangos</h1>
                <div className='grid grid-cols-1 gap-4'>

                </div>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
                  <RhombusConfig rhombusConfig={rhombusArray} imageRhombus={imageRhombus} setImageRhombus={handleImageRhombusChange} setPosition={handlePositionChange} setSize={handleSizeImageChange} setMode={handleModeChange} colorRhombus={colorRhombus} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default App