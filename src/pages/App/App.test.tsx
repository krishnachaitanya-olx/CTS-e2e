import React from 'react';
import App from './App.component';
import { render, wait } from '@testing-library/react';
import { Router } from 'react-router-dom';
import history from 'utils/misc/history';
import { MockedProvider } from '@apollo/react-testing';

describe('App', () => {
    it('should set the page title', async () => {
        render(
            <Router history={history}>
                <MockedProvider mocks={[]} addTypename={false}>
                    <App />
                </MockedProvider>
            </Router>
        );

        await wait(() => expect(document.title).toBe('CTS'));
    });

    it('should set the required meta tags', async () => {
        render(
            <Router history={history}>
                <MockedProvider mocks={[]}>
                    <App />
                </MockedProvider>
            </Router>
        );

        await wait(() => {
            const metaTag = document.querySelector('meta[name="description"]');
            const content = metaTag? metaTag.getAttribute('content'): null;

            expect(content).toBe('CMS for Aasaanjobs');
        });
    });
});
