import { cn } from '@/lib/utils';
// import starImg from '@/app/_assets/images/stars/star-0.png';
import Image from 'next/image';
import React from 'react';
import { GTemp, ModalSoon } from '..';
import { BoostBtn } from '../index';

interface Props {
  className?: string;
}

export const GDesk: React.FC<Props> = ({ className }) => {
  const starLevel = 0;
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className={cn('g-desk relative', className)}>
      {/* <ModalSoon open={isOpen} /> */}
      <GTemp tempCount={300} />
      <div className='relative mb-[50px]'>
        <button className='solar'>
          <Image src={`/images/stars/star-${starLevel}.png`} alt='star' fill />
        </button>

        <BoostBtn className='top-0 left-0' text='Boost' />
        <BoostBtn className='top-0 right-0 flex-row-reverse' text='Galaxy' />
        <BoostBtn className='-bottom-3 left-0' text='Mine' />
        <BoostBtn className='-bottom-3 right-0 flex-row-reverse' text='Loot' />

        <button className='absolute -bottom-4 left-1/2 -translate-x-1/2 w-[120px] h-[50px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1E2D48] to-[#313F56] rounded-[10px] border font-dmed text-lg shadow-evolution'>
          Evolution
        </button>
      </div>
      <div className='line h-[50px] bg-red-600'></div>
    </div>
  );
};
