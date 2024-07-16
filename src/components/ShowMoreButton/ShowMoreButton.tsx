import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { showMoreFlights, getFlights } from '@store/flightsSlice';
import { AppDispatch } from '@store/store';
import './ShowMoreButton.scss';

const ShowMoreButton: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = () => {
        dispatch(showMoreFlights());
        dispatch(getFlights());
    };

    return (
        <button className="show-more" onClick={handleClick}>
            {t('tickets.loadMoreBtn')}
        </button>
    );
};

export default ShowMoreButton;
