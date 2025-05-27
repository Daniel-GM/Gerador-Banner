const ColorMenu = ({ color, handleColorMenuChange }) => {
  return (
    <>
      <label className="text-white text-2xl">Cor do Cardápio</label>
      <input
        type="color"
        value={color}
        className="rounded-lg border-2 w-full border-gray-300"
        onChange={(e) => handleColorMenuChange(e.target.value)}
      />
    </>
  )
}

export default ColorMenu