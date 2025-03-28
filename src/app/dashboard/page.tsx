import React from 'react'
import styles from './page.module.scss'
import fakeData from '../../fakeData/data.json'
import ListCard from '@/components/listCard'

type Props = object

function page({}: Props) {
  return (
    <div className={styles.wrapper}>
        <h1>dashboard</h1>
        <ListCard dataset={fakeData} />
    </div>
  )
}

export default page