import React from 'react'
import Sidebar from './components/sidebar.jsx'

function App() {
  return (
    <div className='h-screen bg-black'>
      <div className="h-[90%] flex">
        <Sidebar/>
      </div>
    </div>
  )
}

export default App