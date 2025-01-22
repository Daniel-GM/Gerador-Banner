import { useState } from 'react'
import Banner from './assets/components/Banner'

function App() {
  

  return (
    <div className="min-h-screen bg-gray-900 h-full">
      <div className="container mx-auto p-6 h-full">
        <div className="grid grid-cols-1 h-full">
          <div className="space-y-4 bg-gray-800/50 p-6 border-gray-700 border-2 rounded-lg shadow-sm mt-6 grid justify-center items-center">
            <Banner />
          </div>
          <div className="space-y-4 bg-gray-800/50 p-6 border-gray-700 border-2 rounded-lg shadow-sm mt-6">
            <h1 className="text-2xl text-white">Configurações</h1>
            {/* config */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App