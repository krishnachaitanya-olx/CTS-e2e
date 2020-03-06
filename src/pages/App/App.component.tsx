import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppLayout from 'grids/PageGrid/PageGrid.component';
import GlobalStyle from './App.style';
import { Helmet } from 'react-helmet';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage.component';

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
          <Route component={NotFoundPage} />
      </Switch>
  </>
);

export default App;
