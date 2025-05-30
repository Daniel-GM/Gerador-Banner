import Input_ from "postcss/lib/input"
import Rhombus from "./Rhombus"
import InputRangeObj from "./InputRangeObj"

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
              <InputRangeObj index={config.id} value={config.positionX} setValue={setPosition} min={0} max={100} mode={"%"} label={"Posição X"} direction={"x"} />
              <InputRangeObj index={config.id} value={config.positionY} setValue={setPosition} min={0} max={100} mode={"%"} label={"Posição Y"} direction={"y"} />
            </div>

            <div className="flex flex-col items-center gap-2 bg-gray-950/50 w-full p-4 rounded-lg border-2  border-gray-700">
              <span className="text-white">Tamanho da imagem</span>
              <div className="flex flex-col gap-0 justify-between h-full w-full">
                {/* decidir qual o valor da propriedade do background-size */}
                <label className="text-white text-center">Modo</label>
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
                <InputRangeObj index={config.id} value={config.sizeImage} setValue={setSize} min={0} max={1000} mode={config.mode} label={"Tamanho em "} direction={""} />
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