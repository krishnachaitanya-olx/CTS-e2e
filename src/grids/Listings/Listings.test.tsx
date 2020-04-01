import { MockedProvider } from '@apollo/react-testing';
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import ListingGrid from './Listings.component';
import jobsQuery from 'pages/Jobs/Jobs.query';

describe('ListingGrid', () => {
    it('should show error `Sorry, Server returned an error.` when request fails', async () => {
        const errorMock = {
            request: {
                query: jobsQuery,
                variables: {
                    filters: {},
                    sort: 'modified__DESC',
                    first: 20,
                    after: 0,
                },
            },
            error: new Error("I'm tired please don't send any requests"),
        };

        const { getByText } = render(
            <MockedProvider mocks={[errorMock]} addTypename={false}>
                <ListingGrid
                  title='jobs'
                  dataSourceGql={{
                        query: jobsQuery,
                    }}
                >
                    {}
                </ListingGrid>
            </MockedProvider>,
        );


        await waitFor(() => {
            expect(getByText('Sorry, Server returned an error.')).toBeTruthy();
            expect(getByText('500')).toBeTruthy();
        });
    });

    it('should show loading skeleton while fetching data', async () => {
        const { getByLabelText } = render(
            <MockedProvider mocks={[]} addTypename={false}>
                <ListingGrid
                  title='jobs'
                  dataSourceGql={{
                        query: jobsQuery,
                    }}
                >
                    {}
                </ListingGrid>
            </MockedProvider>,
        );


        await waitFor(() => {
            expect(getByLabelText('loading-skeleton')).toBeTruthy();
        });
    });
});
