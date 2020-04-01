import { render } from '@testing-library/react';
import React from 'react';
import Loading from './Loading.component';

describe('Loading', () => {
    it('should show the spinner', () => {
        const { getByLabelText } = render(<Loading />);

        expect(getByLabelText('loading-spinner')).toBeTruthy();
    });
});
