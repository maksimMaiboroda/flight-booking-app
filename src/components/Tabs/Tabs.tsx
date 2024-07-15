import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { RootState, AppDispatch } from '@store/store';
import { setSort, getFlights } from '@store/flightsSlice';
import { SortType } from 'types/flightsTypes';
import './Tabs.scss';

const TABS = [
    { id: uuidv4(), name: 'cheap', label: 'Найдешевший' },
    { id: uuidv4(), name: 'fast', label: 'Найшвидший' },
    { id: uuidv4(), name: 'optimal', label: 'Оптимальний' }
];

const Tabs: React.FC = () => {
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
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
