import { useNavigate } from 'react-router-dom'
import PlaceCard from './PlaceCard'
import styles from './recentPlaces.module.css'

export default function RecentPlaces({ places }) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/my-places')
  }

  if (!places || places.length === 0) {
    return (
      <div className={styles.recentPlaces}>
        <h2>Nie odwiedziłeś jeszcze żadnych miejsc</h2>
        <button
          onClick={() => navigate('/add-place')}
          className={styles.changeItNow}
        >
          Zmień to już teraz
        </button>
      </div>
    )
  }

  const firstPlaces = places.length > 3 ? places.slice(0, 3) : places

  return (
    <div className={styles.recentPlaces}>
      <h2>Ostatnio odwiedzone miejsca</h2>
      <div className={styles.placesList}>
        {firstPlaces.map(place => (
          <PlaceCard
            key={place.name}
            place={place}
          />
        ))}
      </div>
      <button
        onClick={handleClick}
        className={styles.showAllPlacesBtn}
      >
        Zobacz wszystkie miejsca
      </button>
    </div>
  )
}
