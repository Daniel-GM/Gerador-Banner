const ChangeColor = ({ color, setColor, label }) => {
  return (
    <>
      <label className="text-white text-2xl">{label}</label>
      <input
        type="color"
        value={color}
        className="inputStyle"
        onChange={(e) => setColor(e.target.value)}
      />
    </>
  )
}

export default ChangeColor