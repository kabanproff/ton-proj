import { classNames } from '@telegram-apps/sdk-react';
import { FC, ReactNode, useMemo } from 'react';
import { Container } from '../Container/Container';

interface GBodyProps {
  className?: string;
  children?: ReactNode;
  bodyStatus: string;
}

export const GBody: FC<GBodyProps> = ({ className, children, bodyStatus }) => {
  // console.log(classNames);

  const borderClasses = useMemo<string>(() => {
    return bodyStatus === 'main' ? ' border-t-white' : 'border-white';
  }, [bodyStatus]);

  return (
    <div className={classNames(['g-body', className])}>
      <div
        className={classNames(
          borderClasses,
          'wrapper h-full rounded-[54px] overflow-hidden bg-sky-stars bg-cover border border-transparent border-solid -mx-[1px]',
        )}
      >
        <Container className='py-[23px]'>{children}</Container>
      </div>
    </div>
  );
};
