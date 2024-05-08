import styles from "./page.module.css";
import Counter from "./Counter/Counter";


export default function Home() {


  return (
    <main className={styles.main}>
      <h1>Counter</h1>
      <Counter />
    </main>
  );
}
