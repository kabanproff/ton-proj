import { classNames } from '@telegram-apps/sdk-react';
import { Children, FC, ReactNode } from 'react';

interface GFooterProps {
  className?: string;
  children?: ReactNode;
}

export const GFooter: FC<GFooterProps> = ({ className, children }) => {
  return <div className={classNames(['g-Footer', className])}></div>;
};
