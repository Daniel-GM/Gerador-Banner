import Rhombus from "./Rhombus"

const RhombusConfig = ({ rhombusConfig, imageRhombus, setImageRhombus, setPosition, setSize, setMode, colorRhombus }) => {

  return (
    <>
      {rhombusConfig.map((config, key) => (
        <div key={key} className="border-gray-700 border-2 p-1 md:p-2 rounded-lg bg-gray-900 grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-4">
          <Rhombus 
            key={key}
            config={config}
            imageRhombus={imageRhombus}
            setImageRhombus={setImageRhombus}
            colorRhombus={colorRhombus}
            layout={"config"}
          />

          <div className="flex flex-col justify-center gap-4 items-center w-full p-2">
            <div className="flex flex-col items-center gap-2 bg-gray-950/50 w-full p-4 rounded-lg border-2 border-gray-700">
              <span className="text-white">Posição da imagem</span>
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

            <div className="flex flex-col items-center gap-2 bg-gray-950/50 w-full p-4 rounded-lg border-2  border-gray-700">
              <span className="text-white">Tamanho da imagem</span>
              <div className="flex gap-4 items-center">
                {/* decidir qual o valor da propriedade do background-size */}
                <label className="text-white text-center">Modo:</label>
                <select
                  value={config.mode}
                  onChange={(e) => {
                    const mode = e.target.value
                    const value = mode === 'cover' || mode === 'contain' ? mode : "100" + mode
                    setMode(config.id, { mode, sizeImage: value })
                  }}
                  className="bg-gray-800 text-white rounded px-2 py-1"
                >
                  <option value="cover">Cover</option>
                  <option value="contain">Contain</option>
                  <option value="px">Pixel (px)</option>
                  <option value="%">Porcentagem (%)</option>
                </select>
              </div>
              {(config.mode === "cover" || config.mode === "contain") && (
                <div className="flex gap-4 items-center">
                  <label className="text-white text-center">Tamanho:</label>
                  <label className="text-white">{config.mode === "cover" ? "Cobrir com a imagem" : "Contém a imagem"}</label>
                </div>
              )}
              {(config.mode === "px" || config.mode === "%") && (
                <div className="flex flex-row xl:flex-col xl:gap-0 2xl:flex-row  gap-2 items-center">
                  <label className="text-white text-center">Tamanho:</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={parseInt(config.sizeImage) || 100}
                      onChange={(e) => setSize(config.id, e.target.value + config.mode)}
                    />
                    <span className="text-white text-center">{config.sizeImage}</span>
                  </div>
                </div>
              )}
            </div>

            <button
              className="text-white bg-red-500 hover:bg-red-600 p-1 w-full rounded-lg"
              onClick={() => {
                setImageRhombus(null, config.id)
                setMode(config.id, { mode: "cover", sizeImage: "cover" })
              }}
            >
              Reset
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default RhombusConfig