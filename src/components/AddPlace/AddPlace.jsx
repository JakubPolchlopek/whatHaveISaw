import PlaceForm from './PlaceForm'

export default function DodajMiejsce({ setPlaces }) {
  return (
    <div>
      <h1>Dodaj Miejsce</h1>
      <p>To jest strona do dodawania nowych miejsc.</p>
      <PlaceForm setPlaces={setPlaces} />
    </div>
  )
}
