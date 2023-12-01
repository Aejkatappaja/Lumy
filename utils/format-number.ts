export const formatNumber = (number: number): string => {
  if (number >= 1000) {
    const formattedNumber = (number / 1000).toFixed(1);
    return formattedNumber.replace('.', ',').toString();
  }
  return '';
};
