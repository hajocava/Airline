import { PassangersInterface } from "../../components/passangers/usePassangers"


export interface FlightState extends FormTrip, FlightID, Seats { }

interface FormTrip {
    origin: string;
    destiny: string;
    date: Date | null;
    passangers: PassangersInterface;
}

interface FlightID { flightID: number | null; }

interface Seats { seats: Array<string>; }

export type FlightAction =
    | { type: 'SET_FORM', payload: FormTrip }
    | { type: 'SET_FLIGHT', payload: FlightID }
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
    flightID: null,
    seats: [],
}

export const flightReducer = (state: FlightState= initialState, action: FlightAction): FlightState => {
    switch (action.type) {
        case 'SET_FORM':
            return {
                ...state,
                origin: action.payload.origin,
                destiny: action.payload.destiny,
                date: action.payload.date,
                passangers: action.payload.passangers
            }
        case 'SET_FLIGHT':
            return {
                ...state,
                flightID: action.payload.flightID
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