const InputRange = ({ value, setValue, min, max, mode, label, sistemaNumerico = "decimal"  }) => {

  const newValue = sistemaNumerico === "decimal" ? parseInt(value) : parseInt(value, 16)

  return (
    <div className="flex flex-col gap-0 justify-between h-full">
      <label className="text-white text-2xl">{label}</label>
      <div className="flex items-center gap-1 justify-center">
        <input
          type="range"
          className="w-full"
          value={newValue}
          min={min}
          max={max}
          onChange={(e) => setValue(e.target.value)}
        />
        <span className="text-white text-center">{newValue}{mode}</span>
      </div>
    </div>
  )
}

export default InputRange