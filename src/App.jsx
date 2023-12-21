import * as React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Canvas from './Canvas'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="canvas" element={<Canvas />} />
      </Routes>
    </div>
  )
}

export default App
