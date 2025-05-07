import Footer from '../../layout/Footer/Footer'
import PlacesMap from '../../PlacesMap'
import Hero from './Hero'
import './home.module.css'
import RecentPlaces from './RecentPlaces/RecentPlaces'
import Summary from './Summary'

export default function Home({ places }) {
  return (
    <div>
      <Hero places={places} />
      <RecentPlaces places={places} />

      {places.length > 0 && (
        <PlacesMap
          places={places}
          mapWidth={places.length > 3 ? '60vw' : '80vw'}
          mapHeight={places.length > 3 ? '20vw' : '30vw'}
        />
      )}

      <Summary places={places} />
      <Footer />
    </div>
  )
}
