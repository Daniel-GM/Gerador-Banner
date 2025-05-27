const ColorMenu = ({ color, handleColorMenuChange}) => {
  return (
    <>
      <label className="text-white text-2xl">Cor do Cardápio</label>
      <input
        type="color"
        value={color}
        className="inputStyle"
        onChange={(e) => handleColorMenuChange(e.target.value)}
      />
    </>
  )
}

export default ColorMenu