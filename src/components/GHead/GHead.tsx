import { FC } from 'react';
import { ShowData } from '../ShowData/ShowData';
import Image from 'next/image';
import mockImg from '../../app/_assets/images/mock/userImage.png';
import { Container } from '../Container/Container';

interface GHeadProps {
  userData: any;
}

export const GHead: FC<GHeadProps> = ({ userData }) => {
  console.log(mockImg);

  return (
    <Container>
      <div className='flex mx-[10px]'>
        <div className='relative pl-[50px]'>
          <Image
            src={userData.photoUrl || mockImg}
            width={40}
            height={40}
            alt='User avatar'
            className='absolute left-0 top-[50%] translate-y-[-50%] rounded-[5px]'
          />
          <div className='text'>Hello!</div>
          <div>
            {userData.firstName} {userData.lastName}
            {/* {userData.username} */}
          </div>
        </div>
      </div>
    </Container>
  );
};
