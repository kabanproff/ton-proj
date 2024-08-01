import React from 'react';

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={['mx-auto', 'max-w-[320px]', className].join(' ')}>
      {children}
    </div>
  );
};
