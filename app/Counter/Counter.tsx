'use client'

import { useState, useEffect } from 'react'
// import { main } from "../hook";
import styles from "./counter.module.css";
import { useTonConnect } from '../hooks/useTonConnect';

const Counter = () => {
  const { network } = useTonConnect();
  console.log(network)
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0)

  async function getData(){
    // return await main();
  }
  
  // useEffect(()=>{
    // const ton = getData();
    // ton.then(res => {
      // console.log(res);
      // setData(res as any)
      
    // })
    // console.log(ton);
    
    // setData(ton)
  // },[])

  // useEffect(async ()=>{
    // console.log(getData());
    

  // },[])

  return (
    <div className={styles.main}>
      <p>You clicked {count} stars</p>
      <p>tons - {data} </p>

      <button className={styles.btn} onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Counter;