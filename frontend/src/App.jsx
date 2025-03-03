import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Home from './pages/Home'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Read from './pages/Read'
 
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/create" element={<Create />}/> 
        <Route path="/edit/:id" element={<Edit />}/> 
        <Route path="/read/:id" element={<Read />}/> 
        <Route path="**" element={<Home />}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
