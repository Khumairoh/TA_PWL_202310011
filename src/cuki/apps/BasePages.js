import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../modules/components/Page/Homes/Home'
import MenuResep from '../modules/components/Page/MenuResep/MenuResep'
import TahuKrispi from '../modules/components/Page/MenuResep/Menu/TahuKrispi'
import MieNyemek from '../modules/components/Page/MenuResep/Menu/MieNyemek'
import About from '../modules/components/Page/About/About'
import Error404 from '../layouts/components/PesanError/Error404'



export default function BasePages() {
  return (
    <Routes>
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='menuresep' element={<MenuResep />} />
            <Route path='tahukrispi' element={<TahuKrispi />} />
            <Route path='mienyemek' element={<MieNyemek />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
  )
}