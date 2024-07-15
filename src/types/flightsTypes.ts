export interface TotalTime {
    hours: number;
    minutes: number;
}

export interface OutboundFlight {
    departureAirport: string;
    arrivalAirport: string;
    departureTime: string;
    arrivalTime: string;
    totalOutboundTime: TotalTime;
    outboundStopsAirports: string[];
}

export interface ReturnFlight {
    departureAirport: string;
    arrivalAirport: string;
    departureTime: string;
    arrivalTime: string;
    totalReturnTime: TotalTime;
    returnStopsAirports: string[];
}

export interface FlightType {
    id: string;
    totalPrice: number;
    outboundFlight: OutboundFlight;
    returnFlight: ReturnFlight;
    logo: string;
}

export type FilterType =
    | 'all'
    | 'noTransfers'
    | 'oneTransfer'
    | 'twoTransfers'
    | 'threeTransfers';
export type SortType = 'cheap' | 'fast' | 'optimal';

export interface FlightsState {
    flights: FlightType[];
    filter: FilterType;
    sort: SortType;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    displayedCount: number;
}
