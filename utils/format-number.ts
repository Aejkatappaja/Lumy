export const formatNumber = (number: number): string | number => {
  if (number >= 1000) {
    const formattedNumber = (number / 1000).toFixed(1);
    return formattedNumber.replace('.', ',').toString();
  }
  return number;
};
