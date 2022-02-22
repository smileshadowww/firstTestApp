import { cleanup, render } from '@testing-library/react';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';
import { convertPLNToUSD } from '../../utils/convertPLNToUSD';
import { convertUSDToPLN } from '../../utils/convertUSDToPLN';
import { screen } from '@testing-library/react';


  describe('Component ResultBox', () => {
    it('should render without crashing', () => {
      render(<ResultBox from="PLN" to="USD" amount={100} />);
    });
    it('should render proper info about conversion when PLN -> USD', () => {
      const testCases = [
        { amount: '100'},
        { amount: '20'},
        { amount: '200'},
        { amount: '345'},
      ];


      for(const testObj of testCases) {
        render(<ResultBox from="PLN" to="USD" amount={testObj.amount} />);
        const output = screen.getByTestId('output');
        const correctValue = convertPLNToUSD(testObj.amount);
        expect(output).toHaveTextContent('PLN ' + testObj.amount + '.00 = ' + correctValue);
        cleanup();
      }
    });
    it('should render proper info about conversion when USD -> PLN', () => {
      const testCases = [
        { amount: '100'},
        { amount: '20'},
        { amount: '200'},
        { amount: '345'},
      ];


      for(const testObj of testCases) {
        render(<ResultBox from="USD" to="PLN" amount={testObj.amount} />);
        const output = screen.getByTestId('output');
        const correctValue = convertUSDToPLN(testObj.amount);
        expect(output).toHaveTextContent('$' + testObj.amount + '.00 = ' + correctValue);
        cleanup();
      }
    });
    it('should render proper info about conversion when PLN -> PLN', () => {
      const testCases = [
        { amount: '100'},
        { amount: '20'},
        { amount: '200'},
        { amount: '345'},
      ];


      for(const testObj of testCases) {
        render(<ResultBox from="PLN" to="PLN" amount={testObj.amount} />);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent('PLN ' + testObj.amount + '.00 = ' + 'PLN ' + testObj.amount + '.00');
        cleanup();
      }
    });
    it('should render proper info about conversion when USD -> USD', () => {
      const testCases = [
        { amount: '100'},
        { amount: '20'},
        { amount: '200'},
        { amount: '345'},
      ];


      for(const testObj of testCases) {
        render(<ResultBox from="USD" to="USD" amount={testObj.amount} />);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent('$' + testObj.amount + '.00 = ' + '$' + testObj.amount + '.00');
        cleanup();
      }
    });
    it('should render wrong value', () => {
      const testCases = [
        { amount: -10 },
        { amount: -30 },
        { amount: -750 },
      ];

      for(const testObj of testCases) {
        render(<ResultBox from="USD" to="PLN" amount={testObj.amount} />);
        const output = screen.getByTestId('output');
        const stringNegative = (testObj.amount).toString();
        const positiveValue = (stringNegative).replace('-','');
        expect(output).toHaveTextContent('-$' + positiveValue + '.00 = ' + 'Wrong value…');
        cleanup();
      }
    });
    it('should render wrong value', () => {
      const testCases = [
        { amount: -10 },
        { amount: -30 },
        { amount: -750 },
      ];

      for(const testObj of testCases) {
        render(<ResultBox from="PLN" to="USD" amount={testObj.amount} />);
        const output = screen.getByTestId('output');
        const stringNegative = (testObj.amount).toString();
        const positiveValue = (stringNegative).replace('-','');
        expect(output).toHaveTextContent('-PLN ' + positiveValue + '.00 = ' + 'Wrong value…');
        cleanup();
      }
    });
});
