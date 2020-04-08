import { mergedColumns, getColsWidthFromPercentage } from './utils';

describe('VirtualTableComponent Util', () => {
    describe('mergedColumns()', () => {
        it('should not touch columns with width', () => {
            expect(mergedColumns([
                {
                    title: 'job',
                    width: 200,
                },
            ], 2000)).toEqual([
                {
                    title: 'job',
                    width: 200,
                },
            ]);
        });

        it('should equally distribute width for columns without width', () => {
            expect(mergedColumns([
                {
                    title: 'job',
                    width: 200,
                },
                {
                    title: 'company',
                },
                {
                    title: 'important people',
                },
            ], 2000)).toEqual([
                {
                    title: 'job',
                    width: 200,
                },
                {
                    title: 'company',
                    width: 1000,
                },
                {
                    title: 'important people',
                    width: 1000,
                },
            ]);
        });
    });

    describe('getColsWidthFromPercentage()', () => {
        it('should calculate the fixed width based on percentage', () => {
            expect(getColsWidthFromPercentage([
                {
                    title: 'job',
                    width: '90%',
                },
                {
                    title: 'company',
                    width: '10%',
                },
            ], 1000)).toEqual([
                {
                    title: 'job',
                    width: 900,
                },
                {
                    title: 'company',
                    width: 100,
                },
            ]);
        });
    });
});
