import { BlurBackground } from '@/components/BlurBackground';
import DisplayPlaylistById from '@/components/DisplayPlaylistById';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'BBH | Playlist',
  description: 'BBH Videos Playlist',
};

export default function PlaylistId({ params }: { params: { id: string } }) {
  const { id } = params;
  if (!id) {
    notFound();
  }
  return (
    <>
      <BlurBackground />
      <DisplayPlaylistById id={id} />
    </>
  );
}
