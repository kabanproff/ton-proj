'use client'

import { useState } from 'react';
import styles from "./counter.module.css";

const Counter = ({handleClick,clikers}) => {

  return (
    <div className={styles.main}>
      <p>You clicked {clikers} clikers</p>
      {/* <p>tons - {data} </p> */}
      <button className={styles.btn} onClick={handleClick}>Clicker</button>
    </div>
  )
}

export default Counter;