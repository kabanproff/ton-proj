'use client'

import { useState, useEffect } from 'react'
import { main } from "./hook";

export default function Counter() {
  const [count, setCount] = useState("0")
  const [data, setData] = useState(0)
  // async function getData() {
  //   return await main();
  // }
  async function getData(){
    return await main();
  }
  
  useEffect(()=>{
    const ton = getData();
    ton.then(res => {
      // console.log(res);
      setData(res as any)
      
    })
    console.log(ton);
    
    // setData(ton)
  },[])

  // useEffect(async ()=>{
    // console.log(getData());
    

  // },[])

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>tons - {data} </p>

      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}