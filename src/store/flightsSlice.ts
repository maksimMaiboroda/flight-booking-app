import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import { fetchFlights } from '@api/flightsApi';
import {
    FlightsState,
    FlightType,
    FilterType,
    SortType
} from '../types/flightsTypes';

const initialState: FlightsState = {
    flights: [],
    filter: 'all',
    sort: 'cheap',
    status: 'idle',
    error: null,
    displayedCount: 5
};

export const getFlights = createAsyncThunk(
    'flights/getFlights',
    async (_, { getState }) => {
        const state = getState() as RootState;
        const { sort, filter, displayedCount } = state.flights;
        const response = await fetchFlights(sort, filter);
        return response.slice(0, displayedCount);
    }
);

const flightsSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<FilterType>) {
            state.filter = action.payload;
        },
        setSort(state, action: PayloadAction<SortType>) {
            state.sort = action.payload;
        },
        showMoreFlights(state) {
            state.displayedCount += 5;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getFlights.pending, state => {
                state.status = 'loading';
            })
            .addCase(
                getFlights.fulfilled,
                (state, action: PayloadAction<FlightType[]>) => {
                    state.status = 'succeeded';
                    state.flights = action.payload;
                }
            )
            .addCase(getFlights.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch flights';
            });
    }
});

export const { setFilter, setSort, showMoreFlights } = flightsSlice.actions;

export const selectFlights = (state: RootState) => state.flights;

export default flightsSlice.reducer;
