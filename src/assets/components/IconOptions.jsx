import { useState } from 'react'

const iconsByCategory = {
  'Alimentos': [
    { value: 'carnes', icon: './alimentos/carne.png' }, 
    { value: 'churrasco', icon: './alimentos/churrasco.png' },
    { value: 'doce', icon: './alimentos/doce.png' },
    { value: 'frutos do mar', icon: './alimentos/frutos do mar.png' },
    { value: 'hambúrguer', icon: './alimentos/hamburguer.png' },
    { value: 'massas', icon: './alimentos/massas.png' },
    { value: 'pães', icon: './alimentos/paes.png' },
    { value: 'pastel frito', icon: './alimentos/pastel frito.png' },
    { value: 'peixe', icon: './alimentos/peixe.png' },
    { value: 'pizza', icon: './alimentos/pizza.png' },
    { value: 'porção', icon: './alimentos/porcao.png' },
    { value: 'salgado', icon: './alimentos/salgado.png' },
    { value: 'salada', icon: './alimentos/salada.png' },
    { value: 'sorvete', icon: './alimentos/sorvete.png' },
    { value: 'sopas', icon: './alimentos/sopas.png' },
    { value: 'tapioca', icon: './alimentos/tapioca.png' },
    { value: 'tortas', icon: './alimentos/torta.png' },
    { value: 'vegetariano', icon: './alimentos/vegetariano.png' },
  ],
  'Bebidas': [
    { value: 'água', icon: './bebidas/agua.png' },
    { value: 'bebida', icon: './bebidas/bebida.png' },
    { value: 'café', icon: './bebidas/cafe.png' },
    { value: 'cerveja', icon: './bebidas/cerveja.png' },
    { value: 'chá', icon: './bebidas/cha.png' },
    { value: 'coquetel', icon: './bebidas/coquetel.png' },
    { value: 'espumante', icon: './bebidas/espumante.png' },
    { value: 'gin', icon: './bebidas/gin.png' },
    { value: 'licor', icon: './bebidas/licor.png' },
    { value: 'refrigerante', icon: './bebidas/refrigerante.png' },
    { value: 'rum', icon: './bebidas/rum.png' },
    { value: 'suco', icon: './bebidas/suco.png' },
    { value: 'tequila', icon: './bebidas/tequila.png' },
    { value: 'vinho', icon: './bebidas/vinho.png' },
    { value: 'vodka', icon: './bebidas/vodka.png' },
    { value: 'whisky', icon: './bebidas/whisky.png' },
  ],
  'Redes Sociais': [
    { value: 'facebook', icon: './redes sociais/facebook.png' },
    { value: 'instagram', icon: './redes sociais/instagram.png' },
    { value: 'linkedin', icon: './redes sociais/linkedin.png' },
    { value: 'pinterest', icon: './redes sociais/pinterest.png' },
    { value: 'snapchat', icon: './redes sociais/snapchat.png' },
    { value: 'telegram', icon: './redes sociais/telegram.png' },
    { value: 'tiktok', icon: './redes sociais/tiktok.png' },
    { value: 'whatsapp', icon: './redes sociais/whatsapp.png' },
    { value: 'youtube', icon: './redes sociais/youtube.png' },
    { value: 'x', icon: './redes sociais/x.png' },
  ],
  'Outros': [
    { value: 'delivery', icon: './outros/delivery.png' },
    { value: 'eventos', icon: './outros/eventos.png' },
    { value: 'localização', icon: './outros/localizacao.png' },
    { value: 'mais', icon: './outros/mais.png' },
    { value: 'reservas', icon: './outros/reservas.png' },
  ],
};

const IconOptions = ({ onChange, id, sugestion, maxLength }) => {
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
    const value = e.target.value || ''
    if (value.length <= maxLength) {
      setInputText(value)
      onChange({ icon: selectedIcon.icon, text: e.target.value })
    }
  }

  return (
    <div className="space-y-2 flex justify-center items-center mx-4">
      <div className="flex justify-center items-center">
        <div className="bg-white p-2 rounded-lg">
          <img
            src={selectedIcon.icon}
            alt={selectedIcon.value}
            className="w-[50px]"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center ml-2">
          <label
            htmlFor="icon"
            className="text-white text-center text-2xl"

          >
            {`Ícone ${id}`}
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
            className="w-full gap-2 p-2 mt-2 rounded-lg border-2 border-gray-300 font-poppins"
            onChange={handleInputChange}
            placeholder={sugestion}
            value={inputText}
          />
          <p className={`${inputText.length >= maxLength ? 'text-red-500' : 'text-gray-500'} text-sm mt-1`}>
            {inputText.length} / {maxLength} caracteres
          </p>
        </div>
      </div>
    </div>
  )
}

export default IconOptions
