import React from 'react';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();
    const flightPrice = `${flight.totalPrice} $`;
    const outboundTime = `${dayjs(flight.outboundFlight.departureTime).format('HH:mm')} - ${dayjs(flight.outboundFlight.arrivalTime).format('HH:mm')}`;
    const outboundAirport = `${flight.outboundFlight.departureAirport} - ${flight.outboundFlight.arrivalAirport}`;
    const totalOutboundTime = `${flight.outboundFlight.totalOutboundTime.hours}г ${flight.outboundFlight.totalOutboundTime.minutes}хв`;
    const outboundStopsAirports =
        flight.outboundFlight.outboundStopsAirports.join(', ');

    const returnTime = `${dayjs(flight.returnFlight.departureTime).format('HH:mm')} - ${dayjs(flight.returnFlight.arrivalTime).format('HH:mm')}`;
    const returnAirport = `${flight.returnFlight.departureAirport} - ${flight.returnFlight.arrivalAirport}`;
    const totalReturnTime = `${flight.returnFlight.totalReturnTime.hours}г ${flight.returnFlight.totalReturnTime.minutes}хв`;
    const returnStopsAirports =
        flight.returnFlight.returnStopsAirports.join(', ');

    const getStopDescription = (stops: string[]) => {
        if (stops.length === 0) {
            return t('tickets.noTransfers');
        } else if (stops.length === 1) {
            return t('tickets.oneTransfer');
        } else {
            return t('tickets.multipleTransfers', { count: stops.length });
        }
    };

    const outboundStops = getStopDescription(
        flight.outboundFlight.outboundStopsAirports
    );
    const returnStops = getStopDescription(
        flight.returnFlight.returnStopsAirports
    );

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
                    description={t('tickets.totalTimeTitle')}
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
                    description={t('tickets.totalTimeTitle')}
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
