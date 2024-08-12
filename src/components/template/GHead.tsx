import Image from 'next/image';
import { FC } from 'react';
import mockImg from '../../app/_assets/images/mock/userImage.png';
import starGroup from '../../app/_assets/images/star-group.png';
import { Container } from './Container';

interface GHeadProps {
  userData: any;
}

export const GHead: FC<GHeadProps> = ({ userData }) => {
  // console.log(starGroup);

  return (
    <Container className='g-head'>
      <div className='flex justify-between mt-1 mb-2'>
        <div className='relative pl-[50px] w-1/2 text-ellipsis'>
          <Image
            src={userData.photoUrl || mockImg}
            width={40}
            height={40}
            alt='User avatar'
            className='absolute left-0 top-[50%] translate-y-[-50%] rounded-[5px]'
          />
          <div className='text text-xs pt-[3px] font-dreg mb-[2px]'>Hello!</div>
          <div className='overflow-hidden whitespace-nowrap max-w-[20ch] text-ellipsis'>
            {userData.firstName} {userData.lastName}
            {/* {userData.username} */}
          </div>
        </div>

        <button className='button-group rounded-[10px] flex text-center items-center relative bg-white bg-opacity-5'>
          <Image src={starGroup} width={40} height={40} alt='Group Icon' />
          <div className='group-name px-[15px]'>
            Star <br /> Brotherhood
          </div>
        </button>
      </div>
    </Container>
  );
};
