import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  open?: boolean;
}

export const ModalSoon: React.FC<Props> = ({ className, open }) => {
  return (
    <div className={cn(open && 'h-full bg-black absolute', className)}>
      {' '}
      fdsafdsf
    </div>
  );
};
