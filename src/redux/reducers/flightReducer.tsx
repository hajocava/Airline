import { PassangersInterface } from "../../components/passangers/usePassangers"


interface FlightState extends FormTrip, FlightID, Seats { }

interface FormTrip {
    origin: string;
    destiny: string;
    date: string;
    passangers: PassangersInterface;
}

interface FlightID { flightID: string; }

interface Seats { seats: Array<string>; }

export type FlightAction =
    | { type: 'SET_FORM', payload: FormTrip }
    | { type: 'SET_FLIGHT', payload: FlightID }
    | { type: 'SET_SEATS', payload: Seats }


const initialState: FlightState = {
    origin: '',
    destiny: '',
    date: '',
    passangers: {
        adults: 0,
        kids: 0,
        babies: 0
    },
    flightID: '',
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