import PlacesMap from '../../PlacesMap'
import PlaceList from './PlaceList'

export default function MyPlaces({ places }) {
  return (
    <div>
      <h1>Moje Miejsca</h1>
      <p>To jest strona z Twoimi ulubionymi miejscami.</p>
      <PlacesMap places={places} />
      <PlaceList places={places} />
    </div>
  )
}
