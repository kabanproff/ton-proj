import { cn } from '@/lib/utils';
import React from 'react';
import { GTemp } from '..';
import starImg from '@/app/_assets/images/stars/star-0.png';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const GDesk: React.FC<Props> = ({ className }) => {
  console.log(starImg);

  return (
    <div className={cn('g-desk', className)}>
      <GTemp tempCount={300} />
      <div className='relative'>
        <button className='solar'>
          <Image src={starImg.src} alt='star' fill />
        </button>
      </div>
    </div>
  );
};
