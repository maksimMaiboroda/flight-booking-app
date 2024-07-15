import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '@components/App/App';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    );
};

export default AppRoutes;
