import React from 'react'
import styles from "./page.module.scss"

type Props = object

function page({}: Props) {
  return (
    <div className={styles.wrapper}>page</div>
  )
}

export default page