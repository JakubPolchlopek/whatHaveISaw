import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PlaceForm({ setPlaces }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    if (!name.trim()) return alert('Wpisz nazwę miejsca')

    setLoading(true)

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          name,
        )}&format=json`,
      )
      const data = await response.json()

      if (!data.length) {
        alert('Nie znaleziono współrzędnych dla podanego miejsca')
        setLoading(false)
        return
      }

      const coords = {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
      }

      const newPlace = {
        id: crypto.randomUUID(),
        name,
        description,
        position: coords,
      }

      setPlaces(prevPlaces => [...prevPlaces, newPlace])
      setName('')
      setDescription('')
      navigate('/my-places')
    } catch (error) {
      alert('Wystąpił błąd przy pobieraniu danych')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='placeName'
        id='placeName'
        placeholder='Nazwa miejsca'
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type='text'
        name='placeDescription'
        id='placeDescription'
        placeholder='Opis'
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <button
        type='submit'
        disabled={loading}
      >
        {loading ? 'Dodawanie...' : 'Dodaj miejsce'}
      </button>
    </form>
  )
}
