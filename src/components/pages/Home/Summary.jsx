import React from 'react'
import styles from './home.module.css'

export default function Summary({ places }) {
  return (
    <div className={styles.summary}>
      <p>Odwiedziłeś {places.length} miejsc</p>
    </div>
  )
}
