import React, { StrictMode } from 'react';

import App from 'pages/App/App.component';
import { Router } from 'react-router-dom';
import history from 'utils/misc/history';
import { render } from 'react-dom';
import serviceWorker from 'serviceWorker';

/**
 * String of the application.
 * React strict mode implememnted.
 */
render(
    <Router history={history}>
        <StrictMode>
            <App />
        </StrictMode>
    </Router>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker();
