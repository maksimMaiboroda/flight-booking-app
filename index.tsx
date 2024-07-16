import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@store/store';
import AppRoutes from '@routes/routes';

import '@styles/main.scss';
import 'normalize.css';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(
        <Provider store={store}>
            <HashRouter>
                <AppRoutes />
            </HashRouter>
        </Provider>
    );
} else {
    console.error('Root container missing in index.html');
}
