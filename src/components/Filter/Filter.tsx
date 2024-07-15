import React, { CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import CloseIcon from '@assets/images/svg/close_icon.svg';
import { RootState, AppDispatch } from '@store/store';
import { setFilter, getFlights } from '@store/flightsSlice';
import { FilterType } from 'types/flightsTypes';
import Checkbox from '@components/Checkbox/Checkbox';
import './Filter.scss';

const menuIconStyles: CSSProperties = {
    width: '30px',
    fill: '#2196F3'
};

const FILTERS = [
    { id: uuidv4(), name: 'all', label: 'Всі' },
    { id: uuidv4(), name: 'noTransfers', label: 'Без пересадок' },
    { id: uuidv4(), name: 'oneTransfer', label: '1 пересадка' },
    { id: uuidv4(), name: 'twoTransfers', label: '2 пересадки' },
    { id: uuidv4(), name: 'threeTransfers', label: '3 пересадки' }
];

interface FilterProps {
    menuOpen: boolean;
    onClose: () => void;
}

const Filter: React.FC<FilterProps> = ({ menuOpen, onClose }) => {
    const dispatch = useDispatch<AppDispatch>();
    const filter = useSelector((state: RootState) => state.flights.filter);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value as FilterType;
        dispatch(setFilter(value));
        dispatch(getFlights());
    };

    return (
        <div className="filter">
            <div className={`filter-content ${menuOpen ? 'open' : ''}`}>
                {menuOpen ? (
                    <button className="close-button" onClick={onClose}>
                        <CloseIcon style={menuIconStyles} />
                    </button>
                ) : null}
                <h2>Кількість пересадок</h2>
                <div className="checkbox-group">
                    {FILTERS.map(item => (
                        <div key={item.id} className="checkbox-item">
                            <Checkbox
                                value={item.name}
                                checked={filter === item.name}
                                label={item.label}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filter;
