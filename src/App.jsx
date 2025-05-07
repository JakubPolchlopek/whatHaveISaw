import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/layout/Header/Header'
import AddPlace from './components/pages/AddPlace/AddPlace'
import Home from './components/pages/Home/Home'
import MyPlaces from './components/pages/MyPlaces/MyPlaces'
import SinglePlace from './components/pages/SinglePlace/SinglePlace'

function App() {
  const [places, setPlaces] = useState([])
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home places={places} />}
        />
        <Route
          path='/my-places'
          element={<MyPlaces places={places} />}
        />
        <Route
          path='/add-place'
          element={<AddPlace setPlaces={setPlaces} />}
        />
        <Route
          path='/my-places/:name'
          element={<SinglePlace places={places} />}
        />
      </Routes>
    </Router>
  )
}

export default App
