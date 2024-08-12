import React from 'react';

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={[className, 'mx-[16px] min-w-[327px]'].join(' ')}>
      {children}
    </div>
  );
};
