import { MockedProvider } from '@apollo/react-testing';
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import JobsPage from './Jobs.component';
import mockData from './Jobs.fixture';
import jobsQuery from './Jobs.query';

describe('JobsPage', () => {
    const successMock = {
        request: {
            query: jobsQuery,
            variables: {
                filters: {},
                sort: 'modified__DESC',
                first: 20,
                after: 0,
            },
        },
        result: {
            data: mockData,
        },
    };

    it('should render the table headers', async () => {
        // without the default option mocked provided throws warning on fragments
        // https://github.com/apollographql/react-apollo/issues/1747#issuecomment-603444537
        const { container } = render(
            <MockedProvider
              mocks={[successMock]}
              addTypename={false}
              defaultOptions={{
                    watchQuery: { fetchPolicy: 'no-cache' },
                    query: { fetchPolicy: 'no-cache' },
                }}
            >
                <JobsPage />
            </MockedProvider>,
        );

        const headers = container.getElementsByTagName('th');

        await waitFor(() => {
            expect(headers.item(0)).toHaveTextContent('Job');
            expect(headers.item(1)).toHaveTextContent('Company');
            expect(headers.item(2)).toHaveTextContent('Job type');
            expect(headers.item(3)).toHaveTextContent('Openings');
            expect(headers.item(4)).toHaveTextContent('Important people');
        });
    });

    it('should render the table headers', async () => {
        const { getByText } = render(
            <MockedProvider
              mocks={[successMock]}
              addTypename={false}
              defaultOptions={{
                    watchQuery: { fetchPolicy: 'no-cache' },
                    query: { fetchPolicy: 'no-cache' },
                }}
            >
                <JobsPage />
            </MockedProvider>,
        );

        expect(getByText('Customer Service Asst Manager/ Sr.Executive, Executive')).toBeTruthy();
        expect(getByText('Customer Service Asst Manager/ Sr.Executive, Executive')).toBeTruthy();
    });
});
