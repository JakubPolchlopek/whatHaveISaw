import PlacesMap from './Map'
import PlaceList from './PlaceList'

export default function MyPlaces({ places }) {
  return (
    <div>
      <h1>Moje Miejsca</h1>
      <p>To jest strona z Twoimi ulubionymi miejscami.</p>
      <PlaceList places={places} />
      <PlacesMap places={places} />
    </div>
  )
}
