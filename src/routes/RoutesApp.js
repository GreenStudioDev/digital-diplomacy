import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AccountDetails from '../pages/AccountDetails'

function RoutesApp () {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/digital-diplomacy"
        element={<Home />}
      />
      <Route
        path={'/digital-diplomacy/:account'}
        element={<AccountDetails />}
      />
    </Routes>
  </BrowserRouter>
  )
}

export default RoutesApp
