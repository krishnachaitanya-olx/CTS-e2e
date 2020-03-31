import numberSuffix from './numberSuffix';

describe('numberSuffix', () => {
    it('should not add any suffix for salaries less than thousand', () => {
        expect(numberSuffix(200)).toBe('200');
    });

    it('should add suffix `K` for salary in thousands', () => {
        expect(numberSuffix(2000)).toBe('2.0 K ');
    });

    it('should add suffix `L` for salary in thousands', () => {
        expect(numberSuffix(200000)).toBe('2.0 L ');
    });

    it('should add suffix `Cr` for salary in crores', () => {
        expect(numberSuffix(20000000)).toBe('2.0 Cr ');
    });
});
