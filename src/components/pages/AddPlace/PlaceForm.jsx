import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PlaceForm({ setPlaces }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState([])
  const [previews, setPreviews] = useState([])
  const navigate = useNavigate()

  const handleImagesChange = e => {
    const files = Array.from(e.target.files)
    setImages(files)

    const previewUrls = files.map(file => URL.createObjectURL(file))
    setPreviews(previewUrls)
  }

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
        images, // tu masz dostęp do wszystkich zdjęć
      }

      setPlaces(prev => [...prev, newPlace])
      setName('')
      setDescription('')
      setImages([])
      setPreviews([])
      navigate('/my-places')
    } catch (err) {
      alert('Błąd podczas pobierania lokalizacji')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Nazwa miejsca'
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Opis'
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <input
        type='file'
        accept='image/*'
        multiple
        onChange={handleImagesChange}
      />
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {previews.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Podgląd ${idx + 1}`}
            style={{ width: '120px', height: 'auto' }}
          />
        ))}
      </div>
      <button
        type='submit'
        disabled={loading}
      >
        {loading ? 'Dodawanie...' : 'Dodaj miejsce'}
      </button>
    </form>
  )
}
