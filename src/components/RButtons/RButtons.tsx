import { classNames } from '@telegram-apps/sdk-react';
import Image from 'next/image';
import { FC } from 'react';
import GasUrl from '../../app/_assets/images/resources/gas.png';
import GemsUrl from '../../app/_assets/images/resources/gems.png';
import LavaUrl from '../../app/_assets/images/resources/lava.png';
import OrUrl from '../../app/_assets/images/resources/ore.png';

interface RButtonsProps {
  className?: string;
}

const BUrls = {
  Lava: LavaUrl,
  Ore: OrUrl,
  Gas: GasUrl,
  Gems: GemsUrl,
};

const btns = [
  {
    name: 'Lava',
    val: '+68K',
  },
  {
    name: 'Ore',
    val: '+68K',
  },
  {
    name: 'Gas',
    val: '+68K',
  },
  {
    name: 'Gems',
    val: '+68K',
  },
];

export const RButtons: FC<RButtonsProps> = ({ className }) => {
  // console.log(BUrls['Lava']);

  return (
    <div
      className={classNames(['r-buttons grid grid-cols-4 gap-2', className])}
    >
      {/* <Image src={BUrls.Lava} alt={'name'} width={28} height={28} /> */}
      {btns.map(({ name, val }) => (
        <button
          className='rounded-[10px] bg-white bg-opacity-50 flex flex-col items-center justify-center py-[3px] mb-[22px]'
          key={name}
        >
          <span className='flex items-center font-dmed'>
            <Image
              src={BUrls[name as keyof typeof BUrls]}
              alt={name}
              width={28}
              height={28}
              className='mr-[4px]'
            />
            {name}
          </span>
          {val}
        </button>
      ))}
    </div>
  );
};
