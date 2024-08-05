'use client';
import Counter from '../components/Counter/Counter';
import { useEffect, useState } from 'react';
import Progress from '@/components/Progress/Progress';

import { Link } from '@/components/Link/Link';
import { GHead } from '@/components/GHead/GHead';
import { useInitData } from '@telegram-apps/sdk-react';
import { GBody } from '@/components/GBody/GBody';
import { GFooter } from '@/components/GFooter/GFooter';
import { RButtons } from '@/components/RButtons/RButtons';

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
    <main className='main fixed left-0 top-0 right-0 bottom-0 flex flex-col'>
      {/* <ShowData data={initData} /> */}
      <GHead userData={initData.user} />
      <GBody className='flex-grow' bodyStatus='main'>
        <RButtons />
        <Link className='inline-block w-full mt-4 text-center' href='/main'>
          main
        </Link>
        <GFooter className='h-[100px] mx-[16px]' />
      </GBody>

      {/* <h1>Counter</h1> */}
      {/* <Counter clikers={clikers} handleClick={handleClick} /> */}

      {/* <Progress status={status} progress={progress} setProgress={setProgress} /> */}
    </main>
  );
}
