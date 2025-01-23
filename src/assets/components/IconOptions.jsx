import { useState } from 'react'

const icons = [
  { value: 'água', icon: ''},
  { value: 'bebida', icon: ''},
  { value: 'churrasco', icon: ''},
  { value: 'doce', icon: ''},
  { value: 'facebook', icon: ''},
  { value: 'hambúrguer', icon: ''},
  { value: 'instagram', icon: ''},
  { value: 'localização', icon: ''},
  { value: 'mais', icon: ''},
  { value: 'pastel frito', icon: ''},
  { value: 'pizza', icon: ''},
  { value: 'porção', icon: ''},
  { value: 'salgado', icon: ''},
  { value: 'Sigesis', icon: ''},
  { value: 'sorvete', icon: ''},
  { value: 'sopas', icon: ''},
  { value: 'twitter', icon: ''},
  { value: 'whatsapp', icon: ''},
]


const IconOptions = ({ onChange, id }) => {
  const [selectedIcon, setSelectedIcon] = useState(icons[0])
  const [inputText, setInputText] = useState('')

  const handleChange = (value) => {
    const icon = icons.find((icon) => icon.value === value)
    setSelectedIcon(icon)
    onChange({ icon: icon.icon, text: inputText }) 
  }
  
  const handleInputChange = (e) => {
    setInputText(e.target.value)
    onChange({ icon: selectedIcon.icon, text: e.target.value }) 
  }

  return (
    <div className='space-y-2 flex justify-center items-center mx-4'>
      <div className='flex justify-center items-center'>
        <div className='bg-white p-2 rounded-lg'>
          <img
            // src={`./src/icons/${selectedIcon.icon}`}
            src={`data:image/svg+xml;utf8,${selectedIcon.icon}`}
            alt={selectedIcon.value}
            className='w-[50px]'
          />
        </div>
        <div className='w-full flex flex-col justify-center items-center ml-2'>
          <label
            htmlFor="icon"
            className='text-white text-center text-xl'
          >
            Ícone {id}
          </label>
          <select
            id="icon"
            name="icon"
            className='w-full gap-2 p-2 mt-2 rounded-lg border-2 border-gray-300'
            value={selectedIcon.value}
            onChange={(e) => handleChange(e.target.value)}
          >
            {icons.map((icon) => (
              <option
                key={icon.value}
                value={icon.value}
              >
                {icon.value}
              </option>
            ))}
          </select>
          <input
            type="text"
            className='w-full gap-2 p-2 mt-2 rounded-lg border-2 border-gray-300'
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  )
}

export default IconOptions