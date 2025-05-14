const RhombusItem = ({ config, imageRhombus, handleImageChange }) => {

  return (
    <div className='tag-wrap'>
      <div
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
          onChange={(e) => handleImageChange(e, config.id)}
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
            height: config.sizeChildren
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