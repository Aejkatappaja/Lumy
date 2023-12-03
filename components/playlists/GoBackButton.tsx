'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

interface GoBackButtonProps {}

export const GoBackButton: React.FC<GoBackButtonProps> = ({}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className=' mt-2 rounded-xl bg-[#616162]/70 px-4 py-3 text-center font-bold text-white shadow-md shadow-black active:-translate-x-1'
    >
      &lt; Retour
    </button>
  );
};
