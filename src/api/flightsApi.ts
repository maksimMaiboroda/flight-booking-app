import flightsData from '@data/flights.json';
import { FlightType, FilterType, SortType } from 'types/flightsTypes';

export const fetchFlights = async (
    sort: SortType,
    filter: FilterType
): Promise<FlightType[]> => {
    return new Promise(resolve => {
        setTimeout(() => {
            let filteredFlights = [...(flightsData as FlightType[])];

            switch (filter) {
                case 'noTransfers':
                    filteredFlights = filteredFlights.filter(
                        flight =>
                            flight.outboundFlight.outboundStopsAirports
                                .length === 0
                    );
                    break;
                case 'oneTransfer':
                    filteredFlights = filteredFlights.filter(
                        flight =>
                            flight.outboundFlight.outboundStopsAirports
                                .length === 1
                    );
                    break;
                case 'twoTransfers':
                    filteredFlights = filteredFlights.filter(
                        flight =>
                            flight.outboundFlight.outboundStopsAirports
                                .length === 2
                    );
                    break;
                case 'threeTransfers':
                    filteredFlights = filteredFlights.filter(
                        flight =>
                            flight.outboundFlight.outboundStopsAirports
                                .length === 3
                    );
                    break;
            }

            switch (sort) {
                case 'cheap':
                    filteredFlights.sort((a, b) => a.totalPrice - b.totalPrice);
                    break;
                case 'fast':
                    filteredFlights.sort((a, b) => {
                        const totalTimeA =
                            a.outboundFlight.totalOutboundTime.hours * 60 +
                            a.outboundFlight.totalOutboundTime.minutes;
                        const totalTimeB =
                            b.outboundFlight.totalOutboundTime.hours * 60 +
                            b.outboundFlight.totalOutboundTime.minutes;
                        return totalTimeA - totalTimeB;
                    });
                    break;
                case 'optimal':
                    filteredFlights.sort((a, b) => {
                        const totalTimeA =
                            a.outboundFlight.totalOutboundTime.hours * 60 +
                            a.outboundFlight.totalOutboundTime.minutes;
                        const totalTimeB =
                            b.outboundFlight.totalOutboundTime.hours * 60 +
                            b.outboundFlight.totalOutboundTime.minutes;

                        if (totalTimeA !== totalTimeB) {
                            return totalTimeA - totalTimeB;
                        }

                        const stopsA =
                            a.outboundFlight.outboundStopsAirports.length;
                        const stopsB =
                            b.outboundFlight.outboundStopsAirports.length;
                        if (stopsA !== stopsB) {
                            return stopsA - stopsB;
                        }

                        return a.totalPrice - b.totalPrice;
                    });
                    break;
            }

            resolve(filteredFlights);
        }, 500);
    });
};
