import { FlightInterface } from "../../components/flights/Flight"
import { PassangersInterface } from "../../components/passangers/usePassangers"


export interface FlightState extends FormTrip, Flight, Seats { }

interface FormTrip {
    origin: string;
    destiny: string;
    date: Date | null;
    passangers: PassangersInterface;
}

interface Flight {
    flight: FlightInterface | null
}

interface Seats { seats: Array<string>; }

export type FlightAction =
    | { type: 'SET_FORM', payload: FormTrip }
    | { type: 'SET_FLIGHT', payload: Flight }
    | { type: 'SET_SEATS', payload: Seats }


const initialState: FlightState = {
    origin: '',
    destiny: '',
    date: null,
    passangers: {
        adults: 0,
        kids: 0,
        babies: 0
    },
    flight: null,
    seats: [],
}

export const flightReducer = (state: FlightState = initialState, action: FlightAction): FlightState => {
    switch (action.type) {
        case 'SET_FORM':
            return {
                ...state,
                origin: action.payload.origin,
                destiny: action.payload.destiny,
                date: action.payload.date,
                passangers: action.payload.passangers,
                flight: null,
                seats: []
            }
        case 'SET_FLIGHT':
            return {
                ...state,
                flight: action.payload.flight,
                seats: []
            }
        case 'SET_SEATS':
            return {
                ...state,
                seats: action.payload.seats
            }
        default:
            return state
    }
}
