import './Rhombus.css'

const Rhombus = ({ rhombusConfig, imageRhombus, setImageRhombus }) => {

  return (
    <>
      {rhombusConfig.map((config, key) => (
        <div
          key={key}
          className={`rhombus absolute flex items-center justify-center`}
          style={{
            top: config.top,
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
      ))}
    </>
  )
}

export default Rhombus