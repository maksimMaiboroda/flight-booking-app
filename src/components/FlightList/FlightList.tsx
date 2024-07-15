import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '@store/store';
import { getFlights, selectFlights } from '@store/flightsSlice';
import Flight from '@components/Flight/Flight';
import Loader from '@components/Loader/Loader';

const FlightList: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { flights, status, filter, sort } = useSelector(selectFlights);

    useEffect(() => {
        dispatch(getFlights());
    }, [dispatch, sort, filter]);

    if (status === 'loading') {
        return <Loader isLoading={true} />;
    }

    if (status === 'failed') {
        return <div>Something was wrong!</div>;
    }

    return (
        <div className="flights">
            {flights.map(flight => (
                <Flight key={flight.id} flight={flight} />
            ))}
        </div>
    );
};

export default FlightList;
