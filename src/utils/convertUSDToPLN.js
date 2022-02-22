export const convertUSDToPLN = (USD) => {
  if (typeof USD === 'string') return NaN;
    else if (typeof USD === ' ') return NaN;
    else if (typeof USD !== 'number') return 'Error';
    else if (USD < 0) return ('Wrong value…');

  const USDtoPLN = USD * 3.5;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PLN'
  });

  return formatter.format(USDtoPLN);
}
