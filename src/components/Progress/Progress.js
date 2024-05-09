'use client';
import React, { useState, useEffect, useRef } from "react";
import styles from "./progress.module.css";

const Progress = ({status,setProgress,progress}) => {
  
  let timer = useRef(undefined);

  function increase() {
    timer.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        if (prev === 100) {
          clearInterval(timer.current);
        }
        return prev;
      });
    }, 100);
  }
  function decrease() {
    timer.current = setInterval(() => {
      setProgress((prev) => {
        if (prev > 0) {
          return prev - 1;
        }
        if (prev === 0) {
          clearInterval(timer.current);
        }
        return prev;
      });
    }, 100);
  }

  function clearTimer() {
    clearInterval(timer.current);
    timer.current = undefined;
  }

  useEffect(() => {
    
    if (status === 'increase') {
      console.log('increase');
      if(timer.current) {
        clearTimer();
      }
      increase();
    } else if (status === 'decrease') {
      if(timer.current) {
        clearTimer();
      }
      console.log('decrease');
      decrease();
    }
    console.log('end effect');
  }, [status]);

  return (
    <div className={styles.main}>
      <div className={styles.progressBar}>
        <div className={styles.bar} style={{ width: `${progress}%` }}/>
      </div>
      <span className={styles.count}>{progress}%</span>
    </div>
  );
};

export default Progress;
