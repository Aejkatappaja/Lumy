export const timeSincePublishedVideo = (date: string): number | null => {
  const publishedDate = new Date(date);
  const now = new Date();

  if (isNaN(publishedDate.getTime())) {
    console.error('invalid date');
    return null;
  }

  const difference = now.getTime() - publishedDate.getTime();

  const differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));

  return differenceInDays;
};
