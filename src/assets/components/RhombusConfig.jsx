const RhombusConfig = ({ rhombusConfig, imageRhombus, setImageRhombus, setPosition }) => {
  return (
    <>
      {rhombusConfig.map((config, key) => (
        <div key={key} className="border-gray-700 border-2 p-2 rounded-lg bg-gray-900 grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-4">
          <div
            key={key}
            className={`rhombus flex items-center justify-center`}
            style={{
              top: key,
              left: config.left,
              width: config.sizeFather,
              height: config.sizeFather
            }}
          >
            <input
              id={config.id}
              type="file"
              className="hidden"
              onChange={(e) => setImageRhombus(e, config.id)}
            />
            <div
              onClick={() => document.getElementById(config.id).click()}
              className={`rhombus relative cursor-pointer`}
              style={{
                backgroundImage: imageRhombus[config.id]
                  ? `url(${imageRhombus[config.id]})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: config.sizeChildren,
                height: config.sizeChildren,
                backgroundPositionX: config.positionX,
                backgroundPositiony: config.positionY,
              }}
            >
              {!imageRhombus[config.id] && (
                <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-center">
                  Adicione uma imagem
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 items-center w-full">
            <div className="flex gap-4 items-center">
              <label className="text-white text-center">Posição X:</label>
              <input
                type="range"
                min="0"
                max="100"
                value={parseInt(config.positionX)}
                onChange={(e) => setPosition(config.id, e.target.value + '%', config.positionY)}
              />
              <span className="text-white text-center">{config.positionX}</span>
            </div>

            <div className="flex gap-4 items-center">
              <label className="text-white text-center">Posição Y:</label>
              <input
                type="range"
                min="0"
                max="100"
                value={parseInt(config.positionY)}
                onChange={(e) => setPosition(config.id, config.positionX, e.target.value + '%')}
              />
              <span className="text-white text-center">{config.positionY}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default RhombusConfig