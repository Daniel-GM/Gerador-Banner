const InputRange = ({ value, setValue, min, max, mode, label }) => {
  return (
    <div className="flex flex-col gap-0 justify-center">
      <label className="text-white text-center">{label}</label>
      <div className="flex items-center gap-1 justify-center">
        <input
          type="range"
          value={parseInt(value)}
          min={min}
          max={max}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className="text-white text-center">{value}{mode}</span>
      </div>
    </div>
  )
}

export default InputRange