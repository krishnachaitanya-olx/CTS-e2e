import { MockedProvider, MockedResponse } from '@apollo/react-testing';
import { render, waitFor, RenderResult } from '@testing-library/react';
import React from 'react';
import JobsPage from './Jobs.component';
import mockData from './Jobs.fixture';
import jobsQuery from './Jobs.query';

const renderJobsPage = (mock: MockedResponse): RenderResult => (
        // without the default option mocked provided throws warning on fragments
        // https://github.com/apollographql/react-apollo/issues/1747#issuecomment-603444537
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

    beforeEach(() => {
        successMock.result.data = mockData;
    });

    it('should render the table headers', async () => {
        const { container } = renderJobsPage(successMock);
        const headers = container.getElementsByTagName('th');

        await waitFor(() => {
            expect(headers.item(1)).toHaveTextContent('Job');
            expect(headers.item(2)).toHaveTextContent('Company');
            expect(headers.item(3)).toHaveTextContent('Job type');
            expect(headers.item(4)).toHaveTextContent('Openings');
            expect(headers.item(5)).toHaveTextContent('Important people');
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
            expect(getByTestId('organization-name')).toHaveTextContent('Logistic Integrators India Private Limited');
            expect(getByTestId('organization-popular-name')).toHaveTextContent('Logistic Integrators');
            // number of vacancies
            expect(getByTestId('vacancies')).toHaveTextContent('3');
            // pricing
            expect(getByTestId('pricing')).toHaveTextContent('POSTPAID');
            // contract
            expect(getByTestId('contract')).toHaveTextContent('PERMANENT');
            // important people
            expect(getByTestId('important-people-cse')).toHaveTextContent('CSE Pratik Tawde');
            expect(getByTestId('important-people-kam')).toHaveTextContent('KAM Tawde');
            expect(getByTestId('important-people-gfi')).toHaveTextContent('GFI Tawde');
            // salary
            expect(getByTestId('salary')).toHaveTextContent('4.0 L -5.0 L ANNUAL');
        });
    });

    it('should say state when it is not open', async () => {
        successMock.result.data.nodes.edges[0].state = 'CLOSED';

        const { getByTestId } = renderJobsPage(successMock);

        await waitFor(() => expect(getByTestId('state')).toHaveTextContent('CLOSED'));
    });

    it('should say stage when it is not approved', async () => {
        successMock.result.data.nodes.edges[0].stage = 'NOT APPROVED';

        const { getByTestId } = renderJobsPage(successMock);

        await waitFor(() => expect(getByTestId('stage')).toHaveTextContent('NOT APPROVED'));
    });

    it('should say `NCAR` when no client approval is needed', async () => {
        successMock.result.data.nodes.edges[0].client_approval_required = false;

        const { getByTestId } = renderJobsPage(successMock);

        await waitFor(() => expect(getByTestId('client-approval')).toHaveTextContent('NCAR'));
    });

    it('should say `CAR` when client approval is needed', async () => {
        successMock.result.data.nodes.edges[0].client_approval_required = true;

        const { getByTestId } = renderJobsPage(successMock);

        await waitFor(() => expect(getByTestId('client-approval')).toHaveTextContent('CAR'));
    });

    it('should say `Screening Required` when screening is required', async () => {
        successMock.result.data.nodes.edges[0].is_screening_required = true;

        const { getByTestId } = renderJobsPage(successMock);

        await waitFor(() => expect(getByTestId('screening')).toHaveTextContent('Screening Required'));
    });

    it('should say `Walkin Job` when screening and client approval is not required', async () => {
        successMock.result.data.nodes.edges[0].is_screening_required = false;
        successMock.result.data.nodes.edges[0].client_approval_required = false;

        const { getByTestId } = renderJobsPage(successMock);

        await waitFor(() => expect(getByTestId('screening')).toHaveTextContent('Walk-in Job'));
    });

    it('should say `Resume Required` when resume is subscribed', async () => {
        successMock.result.data.nodes.edges[0].is_resume_subscribed = true;

        const { getByTestId } = renderJobsPage(successMock);

        await waitFor(() => expect(getByTestId('resume')).toHaveTextContent('Resume Required'));
    });

    it('should show recent slots when present', async () => {
        successMock.result.data.nodes.edges[0].recent_slot = 'Today';

        const { getByTestId } = renderJobsPage(successMock);

        await waitFor(() => expect(getByTestId('recent-slot')).toHaveTextContent('Next Slot: Today'));
    });

    it('should say `No slots available` when there are no recent slots', async () => {
        successMock.result.data.nodes.edges[0].recent_slot = '';

        const { getByTestId } = renderJobsPage(successMock);

        await waitFor(() => expect(getByTestId('recent-slot')).toHaveTextContent('No slots available'));
    });

    it('should say EDU as `NA` when no education qualitification is given', async () => {
        (successMock.result.data.nodes.edges[0].expectation.degree_requirements as any) = undefined;

        const { getByTestId } = renderJobsPage(successMock);

        await waitFor(() => expect(getByTestId('education-and-experience')).toHaveTextContent('Edu: NA'));
    });

    it('should say the degree when education qualitification is given', async () => {
        successMock.result.data.nodes.edges[0].expectation.degree_requirements = {
            degree: {
                name: 'B.E',
            },
        };

        const { getByTestId } = renderJobsPage(successMock);

        await waitFor(() => expect(getByTestId('education-and-experience')).toHaveTextContent('Edu: B.E'));
    });

    it('should say experience as `NA` when no experience is given', async () => {
        (successMock.result.data.nodes.edges[0].expectation.work_exp_requirements as any) = null;

        const { getByTestId } = renderJobsPage(successMock);

        await waitFor(() => expect(getByTestId('education-and-experience')).toHaveTextContent('Exp: NA'));
    });

    it('should say the experience when it is givem', async () => {
        successMock.result.data.nodes.edges[0].expectation.work_exp_requirements = {
            min_experience: 8,
            max_experience: 24,
        };

        const { getByTestId } = renderJobsPage(successMock);

        await waitFor(() => expect(getByTestId('education-and-experience')).toHaveTextContent('Exp: 8 mo - 2.00 yrs'));
    });
});
