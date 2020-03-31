import React from 'react';
import Loading from './Loading.component';
import { render } from '@testing-library/react';

describe('Loading', () => {
    it('should show the spinner', () => {
        const { getByLabelText } = render(<Loading />);

        expect(getByLabelText('loading-spinner')).toBeTruthy();
    });
});
