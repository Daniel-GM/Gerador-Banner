const Button = ({ color, action, label, icon }) => {

  const classColor = {
    red: 'text-red-500 hover:bg-red-600 border-red-500',
    emerald: 'text-emerald-500 hover:bg-emerald-600 border-emerald-500',
    blue: 'text-blue-500 hover:bg-blue-600 border-blue-500',
  }

  return (
    <button 
      className={`flex items-center justify-center gap-1 h-10 font-semibold hover:text-white bg-slate-300 bold border-2 p-1 w-full rounded-lg ${classColor[color]}`}
      onClick={() => action()}
    >
      {icon}
      {label}
    </button>
  )
}

export default Button