import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppLayout from 'grids/Layout/Layout.component';
import GlobalStyle from './App.style';
import { Helmet } from 'react-helmet';
import NotFound from 'pages/NotFoundPage/NotFoundPage.component';

const App: FC<{}> = () => (
  <>
      <GlobalStyle />
      <Helmet
        titleTemplate='CTS - %s'
        defaultTitle='CTS'
      >
          <meta name='description' content='CMS for Aasaanjobs' />
      </Helmet>
      <Switch>
          <Route path='/' component={AppLayout} />
          <Route component={NotFound} />
      </Switch>
  </>
);

export default App;
