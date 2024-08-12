'use client';
import { useEffect, useState } from 'react';
import { Link } from '@/components/Link/Link';
import { useInitData } from '@telegram-apps/sdk-react';
import { GHead, GDesk, GBody, GFooter } from '@/components/template';
import { ModalSoon, RButtons } from '@/components';

export default function Home() {
  const initData = useInitData();

  const [status, setStatus] = useState('');
  const [clikers, setClikers] = useState(0);
  const [btnActive, setBtnActive] = useState(true);
  const [progress, setProgress] = useState(100);

  const [bodyStatus, setBodyStatus] = useState('main');

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

  const handlerModal = () => {
    console.log(status);
    if (bodyStatus === 'main') {
      setBodyStatus('modal');
      return;
    }
    setBodyStatus('main');
  };

  return (
    <main className='main fixed left-0 top-0 right-0 bottom-0 flex flex-col'>
      {/* <ShowData data={initData} /> */}
      <GHead userData={initData.user} />
      <GBody className='flex-grow' bodyStatus={bodyStatus}>
        {bodyStatus !== 'main' && <ModalSoon />}
        <RButtons />
        <GDesk />

        <Link className='inline-block w-full mt-4 text-center' href='/main'>
          main
        </Link>
        <GFooter
          onClick={() => handlerModal()}
          className='h-[100px] mx-[16px]'
        />
      </GBody>

      {/* <h1>Counter</h1> */}
      {/* <Counter clikers={clikers} handleClick={handleClick} /> */}

      {/* <Progress status={status} progress={progress} setProgress={setProgress} /> */}
    </main>
  );
}
