import { MockedProvider, MockedResponse } from '@apollo/react-testing';
import { render, waitFor, RenderResult } from '@testing-library/react';
import React from 'react';
import JobsPage from './Jobs.component';
import mockData from './Jobs.fixture';
import jobsQuery from './Jobs.query';

const renderJobsPage = (mock: MockedResponse): RenderResult => (
        render(
            <MockedProvider
              mocks={[mock]}
              addTypename={false}
              defaultOptions={{
                    watchQuery: { fetchPolicy: 'no-cache' },
                    query: { fetchPolicy: 'no-cache' },
                }}
            >
                <JobsPage />
            </MockedProvider>,
        )
    );

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
        const { container } = renderJobsPage(successMock);
        const headers = container.getElementsByTagName('th');

        await waitFor(() => {
            expect(headers.item(0)).toHaveTextContent('Job');
            expect(headers.item(1)).toHaveTextContent('Company');
            expect(headers.item(2)).toHaveTextContent('Job type');
            expect(headers.item(3)).toHaveTextContent('Openings');
            expect(headers.item(4)).toHaveTextContent('Important people');
        });
    });

    it('should render static content', async () => {
        const { getByTestId } = renderJobsPage(successMock);

        await waitFor(() => {
            // job
            expect(getByTestId('job')).toHaveTextContent('Customer Service Asst Manager/ Sr.Executive, Executive');
            // company name
            expect(getByTestId('company')).toHaveTextContent('Logistic Integrators');
            // functional area
            expect(getByTestId('functional-area')).toHaveTextContent('Telesales / Telemarketing');
            // organization name
            expect(getByTestId('organization-name')).toHaveTextContent('Logistic Integrators');
            // number of vacancies
            expect(getByTestId('vacancies')).toHaveTextContent('3');
            // important people
            expect(getByTestId('important-people-cse')).toHaveTextContent('CSE Pratik Tawde');
            expect(getByTestId('important-people-kam')).toHaveTextContent('KAM Pratik Tawde');
            expect(getByTestId('important-people-gfi')).toHaveTextContent('GFI Pratik Tawde');
        });
    });
});
