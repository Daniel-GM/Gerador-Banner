import { useState } from 'react'

const iconsByCategory = {
  'Alimentos': [
    { value: 'carnes', icon: '' },
    { value: 'churrasco', icon: '' },
    { value: 'doce', icon: '' },
    { value: 'frutos do mar', icon: '' },
    { value: 'hambúrguer', icon: '' },
    { value: 'massas', icon: '' },
    { value: 'pães', icon: '' },
    { value: 'pastel frito', icon: '' },
    { value: 'peixes', icon: '' },
    { value: 'pizza', icon: '' },
    { value: 'porção', icon: '' },
    { value: 'salgado', icon: '' },
    { value: 'salada', icon: '' },
    { value: 'sorvete', icon: '' },
    { value: 'sopas', icon: '' },
    { value: 'tapioca', icon: '' },
    { value: 'tortas', icon: '' },
    { value: 'vegetariano', icon: '' },
  ],
  'Bebidas': [
    { value: 'água', icon: '' },
    { value: 'batida', icon: '' },
    { value: 'bebida', icon: '' },
    { value: 'café', icon: '' },
    { value: 'cerveja', icon: '' },
    { value: 'chá', icon: '' },
    { value: 'coquetel', icon: '' },
    { value: 'destilado', icon: '' },
    { value: 'drinks', icon: '' },
    { value: 'espumante', icon: '' },
    { value: 'gin', icon: '' },
    { value: 'licor', icon: '' },
    { value: 'refrigerante', icon: '' },
    { value: 'rum', icon: '' },
    { value: 'suco', icon: '' },
    { value: 'tequila', icon: '' },
    { value: 'vinho', icon: '' },
    { value: 'vodka', icon: '' },
    { value: 'whisky', icon: '' },
  ],
  'Redes Sociais': [
    { value: 'facebook', icon: '' },
    { value: 'instagram', icon: '' },
    { value: 'linkedin', icon: '' },
    { value: 'pinterest', icon: '' },
    { value: 'snapchat', icon: '' },
    { value: 'telegram', icon: '' },
    { value: 'tiktok', icon: '' },
    { value: 'twitter', icon: '' },
    { value: 'whatsapp', icon: '' },
    { value: 'youtube', icon: '' },
  ],
  'Outros': [
    { value: 'delivery', icon: '' },
    { value: 'eventos', icon: '' },
    { value: 'localização', icon: '' },
    { value: 'mais', icon: '' },
    { value: 'reservas', icon: '' },
  ],
}

const IconOptions = ({ onChange, id }) => {
  const [selectedIcon, setSelectedIcon] = useState(
    Object.values(iconsByCategory).flat()[0]
  )
  const [inputText, setInputText] = useState('')

  const handleChange = (value) => {
    const icon = Object.values(iconsByCategory)
      .flat()
      .find((icon) => icon.value === value)
    setSelectedIcon(icon)
    onChange({ icon: icon.icon, text: inputText })
  }

  const handleInputChange = (e) => {
    setInputText(e.target.value)
    onChange({ icon: selectedIcon.icon, text: e.target.value })
  }

  return (
    <div className="space-y-2 flex justify-center items-center mx-4">
      <div className="flex justify-center items-center">
        <div className="bg-white p-2 rounded-lg">
          <img
            src={`data:image/svg+xml;utf8,${selectedIcon.icon}`}
            alt={selectedIcon.value}
            className="w-[50px]"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center ml-2">
          <label htmlFor="icon" className="text-white text-center text-xl">
            Ícone {id}
          </label>
          <select
            id="icon"
            name="icon"
            className="w-full gap-2 p-2 mt-2 rounded-lg border-2 border-gray-300"
            value={selectedIcon.value}
            onChange={(e) => handleChange(e.target.value)}
          >
            {Object.entries(iconsByCategory).map(([category, icons]) => (
              <optgroup key={category} label={category}>
                {icons.map((icon) => (
                  <option key={icon.value} value={icon.value}>
                    {icon.value}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
          <input
            type="text"
            className="w-full gap-2 p-2 mt-2 rounded-lg border-2 border-gray-300"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  )
}

export default IconOptions
