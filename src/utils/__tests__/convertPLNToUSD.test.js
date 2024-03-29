import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when text in input', () => {
    expect(convertPLNToUSD('d')).toBeNaN();
    expect(convertPLNToUSD('test')).toBeNaN();
    expect(convertPLNToUSD('3')).toBeNaN();
    expect(convertPLNToUSD('-12')).toBeNaN();
  });
  it('should return NaN when input is ""', () => {
    expect(convertPLNToUSD('')).toBeNaN();
  });
  it('should return "Error" when input is not a string nor number', () => {
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(function() {})).toBe('Error');
  });
  it('should return 0 when input is less than 0', () => {
    expect(convertPLNToUSD(-4)).toBe('Wrong value…');
    expect(convertPLNToUSD(-432432)).toBe('Wrong value…');
    expect(convertPLNToUSD(-3.13)).toBe('Wrong value…');
  });
});
