'use client';

import { ChevronRightIcon } from '@heroicons/react/20/solid';
import React from 'react';

export const Button: React.FC = () => {
  return (
    <button className='rounded-md border bg-transparent px-4 py-2'>
      <ChevronRightIcon />
    </button>
  );
};
