export const formatCurrencyUSD = (value: number) => {
  return new Intl.NumberFormat('eu-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};
