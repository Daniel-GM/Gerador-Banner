const RhombusItem = ({ config, imageRhombus, handleImageChange }) => {

  console.log("config", config)

  return (
    <div className='tag-wrap'>
      <div className={`rhombus absolute top-[${config.top}] left-[${config.left}] w-${config.sizeFather} h-${config.sizeFather} flex items-center justify-center`}>
        <input
          id={config.id}
          type="file"
          className="hidden"
          onChange={(e) => handleImageChange(e, config.id)}
        />
        <div
          onClick={() => document.getElementById(config.id).click()}
          className={`rhombus relative cursor-pointer w-${config.sizeChildren} h-${config.sizeChildren}`}
          style={{
            backgroundImage: imageRhombus[config.id]
              ? `url(${imageRhombus[config.id]})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {!imageRhombus[config.id] && (
            <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-center">
              Adicione uma imagem
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default RhombusItem