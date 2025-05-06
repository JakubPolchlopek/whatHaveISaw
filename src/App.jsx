import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import AddPlace from './Components/AddPlace/AddPlace'
import Header from './components/Header/Header'
import Home from './Components/Home/Home'
import MyPlaces from './Components/MyPlaces/MyPlaces'
import SinglePlace from './components/SinglePlace/SinglePlace'

function App() {
  const [places, setPlaces] = useState([])
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
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
