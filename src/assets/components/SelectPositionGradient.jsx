const SelectPositionGradient = ({ position, setPosition, label }) => {
  return (
    <>
      <label className="text-white text-2xl">{label}</label>
      <select
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        className="bg-gray-800 text-white rounded px-2 py-1 w-[200px]"
      >
        <option value="to top">Inferior para superior</option>
        <option value="to bottom">Superior para inferior</option>
      </select>
    </>
  )
}

export default SelectPositionGradient