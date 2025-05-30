const InputRangeObj = ({ index, value, setValue, min, max, mode, label, sistemaNumerico = "decimal", direction }) => {

  value === 'cover' || value === 'contain' ? value = 50 : value = parseInt(value)

  return (
    <div className="flex flex-col gap-0 justify-between h-full w-full">
      <label className="text-white text-xl">{ direction !== "" ? label : label + mode }</label>
      <div className="flex items-center gap-1 justify-center">
        <input
          type="range"
          className="w-full"
          value={value}
          min={min}
          max={max}
          onChange={(e) => direction !== "" 
            ? setValue(index, e.target.value + mode, direction) 
            : setValue(index, e.target.value + mode)
          }
        />
        <span className="text-white text-center">{value}{mode}</span>
      </div>
    </div>
  )
}

export default InputRangeObj