import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './home.module.css'

export default function Hero() {
  const navifate = useNavigate()
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h2>Sledz miejsca które odwiedziłeś na interaktywnej mapie</h2>
        <button
          onClick={() => navifate('/add-place')}
          className={styles.addPlaceButton}
        >
          Dodaj nowe miejsce
        </button>
      </div>
    </div>
  )
}
