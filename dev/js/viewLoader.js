import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './views/Home';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.querySelector('.vw-index')
    );
};

render(Root);

if (module.hot) {
    module.hot.accept('./views/Home', () => { render(Root); });
}
