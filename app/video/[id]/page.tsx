import GetVideoById from '@/components/GetVideoById';
import { Spinner } from '@/components/Spinner';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'BBH | Videos',
  description: 'BBH Videos Page',
};

export default async function Videos({ params }: { params: { id: string } }) {
  const { id } = params;
  if (!id) {
    notFound();
  }

  return (
    <Suspense fallback={<Spinner />}>
      <GetVideoById id={id} />
    </Suspense>
  );
}
