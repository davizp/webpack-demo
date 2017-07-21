import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.querySelector('.vw-index')
    );
};

const Root = require(`${_app.page.jsView}`).default;


if (module.hot) {
    module.hot.accept();

    console.warn('index.js HMR');

    // render(Root);
}

render(Root);
