// import React from 'react';
// import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

const Root = require(`${_app.page.jsView}`).default;

if (module.hot) {

    module.hot.accept();
}

ReactDOM.render(
    <AppContainer>
        <Root />
    </AppContainer>,
    document.querySelector('#root')
);
