import React from 'react'
import styles from "./statsCard.module.scss"

type Props = {
  label: string,
  data: number,
  unit?: string
}

function index({label, data, unit}: Props) {
  return (
    <div className={styles.wrapper}>
      <h3>{label}</h3>
      <p>{data}
        {unit && <span>{unit}</span>}
      </p>
    </div>
  )
}

export default index