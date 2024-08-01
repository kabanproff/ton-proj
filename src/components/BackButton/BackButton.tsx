import { Button } from '@telegram-apps/telegram-ui';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

// export interface BackButtonProps {}

export const BackButton: FC = () => {
  const router = useRouter();

  return (
    <Button
      mode='filled'
      size='s'
      className='m-2'
      onClick={() => router.back()}
    >
      GoBackPage
    </Button>
  );
};
