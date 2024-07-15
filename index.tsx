import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './src/store/store';
import App from './src/components/App/App';

import './src/styles/main.scss';
import 'normalize.css';

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
} else {
    console.error('Root container missing in index.html');
}
