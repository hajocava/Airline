export interface TripsState {
    trips: Array<Trip>;
}

export interface Trip {
    value: string;
    label: string;
}

const initialState: TripsState = {
    trips: []
}

export type TripAction =
    | { type: 'SET_TRIPS', payload: TripsState }

export const tripsReducer = (state: TripsState = initialState, action: TripAction): TripsState => {
    switch (action.type) {
        case 'SET_TRIPS':
            return {
                ...state,
                trips: action.payload.trips
            }
        default:
            return state
    }
}