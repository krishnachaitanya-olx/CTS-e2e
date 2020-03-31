import numberSuffix from './numberSuffix';

describe('numberSuffix', () => {
    it('should return salary denominated without prefix when salary > 10 * 9', () => {
        expect(numberSuffix(2 * 10 ** 9)).toBe('200000.0');
    })
    it('should not add any suffix for salaries less than thousand', () => {
        expect(numberSuffix(200)).toBe('200');
    });

    it('should add suffix `K` for salary in thousands', () => {
        expect(numberSuffix(2000)).toBe('2.0 K ');
    });

    it('should add suffix `L` for salary in thousands', () => {
        expect(numberSuffix(2 * 10 ** 5)).toBe('2.0 L ');
    });

    it('should add suffix `Cr` for salary in crores', () => {
        expect(numberSuffix(2 * 10 ** 7)).toBe('2.0 Cr ');
    });
});
