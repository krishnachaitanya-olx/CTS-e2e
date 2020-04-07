import { MockedProvider } from '@apollo/react-testing';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import mockData from '../Jobs/Jobs.fixture';
import GlobalStyle from './App.style';
import Routes from './Routes.component';
import jobsQuery from 'pages/Jobs/Jobs.query';

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

const App: FC<{}> = () => (
    <>
        <GlobalStyle />
        <Helmet
          titleTemplate='CTS - %s'
          defaultTitle='CTS'
        >
            <meta name='description' content='CMS for Aasaanjobs' />
        </Helmet>
        <MockedProvider
          mocks={[successMock]}
          addTypename={false}
          defaultOptions={{
                watchQuery: { fetchPolicy: 'no-cache' },
                query: { fetchPolicy: 'no-cache' },
            }}
        >
            <Routes />
        </MockedProvider>
    </>
);

export default App;
