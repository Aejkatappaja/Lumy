'use client';

import React from 'react';

interface ButtonProps {}

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <button className='rounded-md border bg-transparent px-4 py-2'>
      bbh.bzh
    </button>
  );
};
