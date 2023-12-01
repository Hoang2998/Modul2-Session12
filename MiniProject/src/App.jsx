import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Boody from './Components/Body/Boody'
import Cart from './Components/Cart/Cart'

export default function App() {
  return (
    <>
    <Header></Header>      
    <Routes>
      <Route path='/'element={<Boody></Boody>}></Route>
      <Route path='/cart'element={<Cart></Cart>}></Route>
    </Routes>
    </>
  )
}
