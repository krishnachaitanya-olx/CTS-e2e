import App from 'pages/App';
import React from 'react';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { render } from 'react-dom';
import serviceWorker from 'serviceWorker';

const history = createBrowserHistory();

render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker();
