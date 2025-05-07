import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'

export default function PlacesMap({ places, mapHeight, mapWidth }) {
  const navigate = useNavigate()

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={5}
      scrollWheelZoom={false}
      style={{
        height: mapHeight || '25vw',
        width: mapWidth || '80vw',
        borderRadius: '2rem',
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {places.map(place => (
        <Marker
          key={place.id}
          position={place.position}
        >
          <Popup>
            <div
              onClick={() =>
                navigate(`/my-places/${encodeURIComponent(place.name)}`)
              }
              style={{ cursor: 'pointer' }}
            >
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              <small>(Kliknij, aby zobaczyć więcej)</small>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
