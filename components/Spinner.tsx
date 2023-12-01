import React from 'react';

interface SpinnerProps {}

export const Spinner: React.FC<SpinnerProps> = ({}) => {
  return (
    <div className='flex h-full items-center justify-center'>
      <div className='relative inline-flex'>
        <div className='h-8 w-8 rounded-full bg-pink-500'></div>
        <div className='absolute left-0 top-0 h-8 w-8 animate-ping rounded-full bg-pink-500'></div>
        <div className='absolute left-0 top-0 h-8 w-8 animate-pulse rounded-full bg-pink-500'></div>
      </div>
    </div>
  );
};
