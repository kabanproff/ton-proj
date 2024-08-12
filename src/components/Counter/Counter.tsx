'use client';
import styles from './counter.module.css';

export const Counter = ({
  handleClick,
  clikers,
}: {
  handleClick: () => void;
  clikers: number;
}) => {
  return (
    <div className={styles.main}>
      <p>You clicked {clikers} clikers</p>
      {/* <p>tons - {data} </p> */}
      <button className={styles.btn} onClick={handleClick}>
        Clicker
      </button>
    </div>
  );
};
