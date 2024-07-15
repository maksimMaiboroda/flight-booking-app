import React from 'react';
import './Loader.scss';

interface LoaderProps {
    isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
    if (!isLoading) {
        return null;
    }

    return (
        <div className="preloader">
            <div className="spinner"></div>
        </div>
    );
};

export default Loader;
