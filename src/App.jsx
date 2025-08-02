import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/ai' element={<Dashboard />} />
        <Route  path='*' element={<Navigate to="/ai"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App