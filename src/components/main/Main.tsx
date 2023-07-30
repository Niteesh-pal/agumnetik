import React from 'react'
import {Routes,Route} from 'react-router-dom'
import DashBoard from '../pages/DashBoard'
import HomePage from '../pages/HomePage'

const Main = () => {
  return (
    <Routes>
        <Route path='/login' element={<DashBoard/>}></Route>
        <Route path='/' element={<HomePage/>}></Route>
        
    </Routes>
  )
}

export default Main