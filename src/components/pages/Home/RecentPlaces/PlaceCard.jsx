import { useNavigate } from 'react-router-dom'
import styles from './recentPlaces.module.css'

export default function PlaceCard({ place }) {
  const { name, description, image } = place
  const imageUrl = image || '/default-image.jpeg'
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/my-places/${encodeURIComponent(place.name)}`)
  }

  return (
    <div
      onClick={handleClick}
      className={styles.placeCard}
    >
      <img
        src={imageUrl}
        alt={name || 'Default'}
      />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}
