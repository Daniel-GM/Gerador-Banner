const ColorGradient = ({ setLinear, color }) => {
  return (
    <>
      <label className="text-white text-2xl">Cor do gradiente</label>
      <input 
        type="color" 
        value={color}
        className="inputStyle"
        onChange={(e) => setLinear(e.target.value)}
      />
    </>
  )
}

export default ColorGradient