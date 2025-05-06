import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PlaceList({ places }) {
  const navigate = useNavigate()

  return (
    <div>
      <h1>Lista Miejsc</h1>
      <ul>
        {places.map((place, index) => (
          <li key={index}>
            <button onClick={() => navigate(`/my-places/${place.name}`)}>
              {place.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
