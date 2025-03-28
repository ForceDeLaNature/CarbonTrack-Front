import React from 'react'
import AddTripForm from '@/components/Forms/addTripForm'
import styles from "./page.module.scss"

type Props = object

function page({}: Props) {
  return (
    <div className={styles.wrapper}>
      <AddTripForm />
    </div>
  )
}

export default page