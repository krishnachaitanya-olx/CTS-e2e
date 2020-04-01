import { render } from '@testing-library/react';
import React from 'react';
import { NotFoundPage } from './NotFoundPage.component';

describe('NotFoundPage', () => {
    it('should say have the title as `404`', () => {
        const { getByText } = render(<NotFoundPage />);

        expect(getByText('404')).toBeTruthy();
    });

    it('should say have `Sorry, the page you visited does not exist.`', () => {
        const { getByText } = render(<NotFoundPage />);

        expect(getByText('Sorry, the page you visited does not exist.')).toBeTruthy();
    });

    it('should have a link to go back home', () => {
        const { getByText } = render(<NotFoundPage />);
        const btnGoHome = getByText('Back Home');

        expect(btnGoHome.parentElement).toHaveAttribute('href', '/');
    });
});
