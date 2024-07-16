import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { RootState, AppDispatch } from '@store/store';
import { setSort, getFlights } from '@store/flightsSlice';
import { SortType } from 'types/flightsTypes';
import './Tabs.scss';

const TABS = [
    { id: uuidv4(), name: 'cheap' },
    { id: uuidv4(), name: 'fast' },
    { id: uuidv4(), name: 'optimal' }
];

const Tabs: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch<AppDispatch>();
    const sort = useSelector((state: RootState) => state.flights.sort);

    const handleSort = (sortType: SortType) => {
        dispatch(setSort(sortType));
        dispatch(getFlights());
    };

    return (
        <div className="tabs">
            {TABS.map(tab => (
                <button
                    key={tab.id}
                    className={`tab ${sort === tab.name ? 'active' : ''}`}
                    onClick={() => handleSort(tab.name as SortType)}
                >
                    {t(`sorting.${tab.name}`)}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
