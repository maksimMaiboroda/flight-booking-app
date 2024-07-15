import React from 'react';
import { useDispatch } from 'react-redux';
import { showMoreFlights, getFlights } from '@store/flightsSlice';
import { AppDispatch } from '@store/store';
import './ShowMoreButton.scss';

const ShowMoreButton: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = () => {
        dispatch(showMoreFlights());
        dispatch(getFlights());
    };

    return (
        <button className="show-more" onClick={handleClick}>
            Показати ще 5 квитків
        </button>
    );
};

export default ShowMoreButton;
