import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Layout from './Layout'
const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/task' element={<Layout/>}>
              <Route index element={<Homepage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing