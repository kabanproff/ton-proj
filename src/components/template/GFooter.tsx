import { classNames } from '@telegram-apps/sdk-react';
import { Children, FC, ReactNode } from 'react';

interface GFooterProps {
  className?: string;
  children?: ReactNode;
  onClick: () => void;
}

export const GFooter: FC<GFooterProps> = ({ className, children, onClick }) => {
  return (
    <div
      className={classNames([
        'g-Footer text-center p-4 bg-slate-600',
        className,
      ])}
      onClick={onClick}
    >
      Footer
    </div>
  );
};
