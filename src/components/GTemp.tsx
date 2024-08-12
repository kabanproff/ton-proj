import React from 'react';
import tIcon from '@/app/_assets/t.svg';
import { cn } from '@/lib/utils';
interface Props {
  className?: string;
  tempCount: number;
}

export const GTemp: React.FC<Props> = ({ className, tempCount }) => {
  return (
    <div
      className={cn(
        'g-temp text-center flex-center h-[45px] mb-[8px]',
        className,
      )}
    >
      <div className='size-[45px] flex-center rounded-full rays'>
        {/* t <sup>o</sup> */}
        <img src={tIcon.src} alt='temp icon' />
      </div>
      <span className='font-dbold ml-2 text-[36px]'>{tempCount}</span>
    </div>
  );
};
