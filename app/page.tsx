'use client'
import styles from "./page.module.css";
import Counter from "./Counter/Counter";
import { useEffect, useState } from "react";


export default function Home() {
  
  let incrementBy = 1;
  let timeInterval = 100;
  
  const [count, setCount] = useState(50);
  const [timer, setTimer] = useState(0);
  const [active, setActive] = useState(false);
  const [isZerable, setIsZerable] = useState(false)
  
  useEffect(() => {
    let timer = 0;
    if(active && count > 0) {
      clearInterval(timer)
      // console.log(active, count, 'd',timer)
      timer = setInterval(
        () =>
          setCount((prevCount) =>{
            if((prevCount <= 50) && prevCount > 0) {
              console.log(timer)
              return prevCount - incrementBy 
            } else {
              console.log(timer)
              clearInterval(timer);
              setActive(false)
              setIsZerable(true)
              return 0;
            }
          }
          ),
        timeInterval
      );
      setTimer(timer);
      
    } else {
      console.log('active', active)
    
      // 
      // setCount(50) 
      // setActive(false)
    }
  }, [active]);



  return (
    <main className={styles.main}>
      <h1>Counter</h1>
      <Counter 
        handlerActive={setActive} 
        active={active} 
        counter={count} 
        isZerable={isZerable}
        setCounter={setCount}
      />
      <label htmlFor="file">File progress:</label>
      <progress id="file" max="50" value={count}></progress>
      <span>{count}</span>
    </main>
  );
}
