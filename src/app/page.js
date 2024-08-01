'use client';
import Counter from '../components/Counter/Counter';
import { useEffect, useState } from 'react';
import Progress from '@/components/Progress/Progress';

import { Link } from '@/components/Link/Link';
import { GHead } from '@/components/GHead/GHead';
import { useInitData } from '@telegram-apps/sdk-react';

export default function Home() {
  const initData = useInitData();

  const [status, setStatus] = useState('');
  const [clikers, setClikers] = useState(0);
  const [btnActive, setBtnActive] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    // if(btnActive && !progress){
    // setStatus('increase')
    // }
    // if(!btnActive && (progress === 100)) {
    // setBtnActive(true);
    // }
  }, [btnActive]);

  function handleClick() {
    console.log(btnActive);
    if (status === 'decrease' && !progress) {
      console.log('hjfj', status === 'decrease');
      setBtnActive(false);
      setStatus('increase');
    }
    if (progress === 100) {
      // setActive(true);
      setStatus('decrease');
      setBtnActive(true);
    } else if (!btnActive) {
      return;
    }
    setClikers(clk => {
      return clk + 1;
    });
  }

  return (
    <main>
      {/* <ShowData data={initData} /> */}
      <GHead userData={initData.user} />
      <Link href='/main'>main</Link>

      <h1>Counter</h1>
      <Counter clikers={clikers} handleClick={handleClick} />

      <Progress status={status} progress={progress} setProgress={setProgress} />
    </main>
  );
}
