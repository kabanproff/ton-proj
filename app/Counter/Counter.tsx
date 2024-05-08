'use client'

import { useState, useEffect } from 'react'
// import { main } from "../hook";
import styles from "./counter.module.css";
import { useTonConnect } from '../hooks/useTonConnect';

const Counter = (props: object) => {
  const {
    handlerActive, 
    active, 
    counter, 
    isZerable, 
    setCounter
  } = props as any;
  const { network } = useTonConnect();
  // console.log(network)
  const [count, setCount] = useState(0)
  const [data, setData] = useState(0);
  const [timer, setTimer] = useState(0)

  async function getData(){
    // return await main();
  }

  const handlerClick = () => {
    // let timer;
    if((counter < 100) && isZerable) {
      clearInterval(timer)
      console.log('ddddd',timer)
      setTimer(setInterval(
        () =>
          setCounter((prevCount: number) => {
            if((prevCount <= 50) && prevCount < 50) {
              // console.log(timer)
              return prevCount + 1; 
            } else {
              // console.log(timer)
              clearInterval(timer);
              // setActive(false)
              // setIsZerable(true)
              return 50;
            }
          }
          ),1000) as unknown as number)
      // setTimer(timer);
      return;
    }
    handlerActive(true);
    if(active) {
      setCount(count + 1);
    }
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

      <button className={styles.btn} onClick={handlerClick}>Click me</button>
    </div>
  )
}

export default Counter;