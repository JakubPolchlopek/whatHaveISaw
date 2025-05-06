import React from 'react'
import { useParams } from 'react-router-dom'

export default function SinglePlace({ places }) {
  const { name } = useParams()
  const place = places.find(place => place.name === name)
  if (!place) {
    return <p>Nie znaleziono miejsca o podanym ID.</p>
  }
  return (
    <div>
      <h1>{place.name}</h1>
      <p>{place.description}</p>
      <div>
        {place.images.map((image, index) => (
          <img
            key={index}
            src={URL.createObjectURL(image)}
            alt={`Zdjęcie ${index + 1}`}
            style={{ width: '200px', height: 'auto', margin: '10px' }}
          />
        ))}
      </div>
    </div>
  )
}
