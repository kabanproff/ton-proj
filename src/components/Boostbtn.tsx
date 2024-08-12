import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
// import imageUrl from '@/app/_assets/images/stars/star-0.png';

interface Props {
  className?: string;
  text: string & keyof typeof urls;
  onClick?: () => void;
}

enum urls {
  Boost = '/images/btns/boost.png',
  Galaxy = '/images/btns/galaxy.png',
  Loot = '/images/btns/loot.png',
  Mine = '/images/btns/mine.png',
}

export const BoostBtn: React.FC<Props> = ({ className, text, onClick }) => {
  return (
    <button
      className={cn(
        'bostButton flex justify-between items-center absolute active:bg-slate-50 gap-1',
        className,
      )}
      onClick={onClick}
    >
      {urls[text] && (
        <Image
          src={urls[text]}
          alt='icon btn'
          className='size-[50px]'
          width={50}
          height={50}
        />
      )}
      {text}
    </button>
  );
};
