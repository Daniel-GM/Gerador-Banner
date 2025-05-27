const TransparentGradient = ({ transparent, setTransparent }) => {
  const value = parseInt(transparent, 16)

  return (
    <>
      <label className="text-white text-2xl">Transparência do Gradiente</label>
      <div className="flex gap-4">
        <span className="text-white text-xs">{value}</span>
        <input
          type="range"
          className="w-3/4"
          min={0}
          max={255}
          value={value}
          onChange={(e) => setTransparent(e.target.value)}
        />
      </div>
    </>
  )
}

export default TransparentGradient