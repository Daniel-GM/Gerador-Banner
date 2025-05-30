import './Rhombus.css'

const Rhombus = ({ config, imageRhombus, setImageRhombus, colorRhombus, layout = "default" }) => {

  return (
    <div
      className={layout === "default"
        ? `rhombus absolute flex items-center justify-center`
        : `rhombus flex items-center justify-center`
      }
      style={{
        background: colorRhombus,
        top: config.top,
        left: config.left,
        width: config.sizeFather,
        height: config.sizeFather
      }}
    >
      <input
        id={config.id}
        type="file"
        accept="image/*"
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
          backgroundColor: '#fff',
          backgroundSize: config.sizeImage,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: config.sizeChildren,
          height: config.sizeChildren,
          backgroundPositionX: config.positionX,
          backgroundPositionY: config.positionY,
        }}
      >
        {!imageRhombus[config.id] && (
          <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-center">
            Adicione uma imagem
          </span>
        )}
      </div>
    </div>
  )
}

export default Rhombus