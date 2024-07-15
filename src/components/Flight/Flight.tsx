import React from 'react';
import clsx from 'clsx';
import dayjs from 'dayjs';
import AirportLogo from '@assets/images/a4e_logo.png';
import DetailField from '@components/DetailField/DetailField';
import { FlightType } from 'types/flightsTypes';
import './Flight.scss';

interface FlightProps {
    flight: FlightType;
}

const Flight: React.FC<FlightProps> = ({ flight }) => {
    const flightPrice = `${flight.totalPrice} $`;
    const outboundTime = `${dayjs(flight.outboundFlight.departureTime).format('HH:mm')} - ${dayjs(flight.outboundFlight.arrivalTime).format('HH:mm')}`;
    const outboundAirport = `${flight.outboundFlight.departureAirport} - ${flight.outboundFlight.arrivalAirport}`;
    const totalOutboundTime = `${flight.outboundFlight.totalOutboundTime.hours}г ${flight.outboundFlight.totalOutboundTime.minutes}хв`;
    const outboundStops = !flight.outboundFlight.outboundStopsAirports.length
        ? 'Без пересадок'
        : `${flight.outboundFlight.outboundStopsAirports.length} пересадка`;
    const outboundStopsAirports =
        flight.outboundFlight.outboundStopsAirports.join(', ');

    const returnTime = `${dayjs(flight.returnFlight.departureTime).format('HH:mm')} - ${dayjs(flight.returnFlight.arrivalTime).format('HH:mm')}`;
    const returnAirport = `${flight.returnFlight.departureAirport} - ${flight.returnFlight.arrivalAirport}`;
    const totalReturnTime = `${flight.returnFlight.totalReturnTime.hours}г ${flight.returnFlight.totalReturnTime.minutes}хв`;
    const returnStops = !flight.returnFlight.returnStopsAirports.length
        ? 'Без пересадок'
        : `${flight.returnFlight.returnStopsAirports.length} пересадка`;
    const returnStopsAirports =
        flight.returnFlight.returnStopsAirports.join(', ');

    return (
        <div className="flight">
            <div className="flight-detail-group">
                <div className={clsx('detail-item', 'flight-total-price')}>
                    {flightPrice}
                </div>
                <div className="detail-item">
                    <img
                        src={AirportLogo}
                        className="airport-logo"
                        alt="Airport logo"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="flight-detail-group">
                <DetailField
                    className="detail-item"
                    info={outboundTime}
                    description={outboundAirport}
                />
                <DetailField
                    className="detail-item"
                    info={String(totalOutboundTime)}
                    description="В дорозі"
                />
                <DetailField
                    className="detail-item"
                    info={outboundStopsAirports}
                    description={outboundStops}
                />
            </div>
            <div className="flight-detail-group">
                <DetailField
                    className="detail-item"
                    info={returnTime}
                    description={returnAirport}
                />
                <DetailField
                    className="detail-item"
                    info={String(totalReturnTime)}
                    description="В дорозі"
                />
                <DetailField
                    className="detail-item"
                    info={returnStopsAirports}
                    description={returnStops}
                />
            </div>
        </div>
    );
};

export default Flight;
