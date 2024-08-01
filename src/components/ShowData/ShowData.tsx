import { FC } from 'react';

interface ShowDataProps {
  data: any;
  [key: string]: any;
}

export const ShowData: FC<ShowDataProps> = ({ data }) => {
  return (
    <div className='w-[80vw]'>{data && <pre>{JSON.stringify(data)}</pre>}</div>
  );
};
