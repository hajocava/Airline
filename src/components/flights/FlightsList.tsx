import { Flight } from "./Flight"
import "./styles.sass"

export const FlightsList = () => {
    return (
        <div className="container" style={{ paddingBottom: 100 }}>
            <div className="flight mt-4">
                {
                    FLIGHTS.map((flight, index) => (
                        <div key={index} className="mb-4">
                            <Flight flight={flight} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const FLIGHTS = [
    {
        id: 1,
        origin: 'New York',
        originShort: 'NY',
        originHour: '10:30',
        destiny: 'Francia',
        destinyShort: 'FR',
        destinyHour: '16:40',
        flightDuration: '06h 35m',
        flight: 'Y905',
        scales: 0,
        price: 500,
    },
    {
        id: 2,
        origin: 'New York',
        originShort: 'NY',
        originHour: '11:25',
        destiny: 'Francia',
        destinyShort: 'FR',
        destinyHour: '20:30',
        flightDuration: '09h 50m',
        flight: 'P601',
        scales: 2,
        price: 4200,
    },
    {
        id: 3,
        origin: 'New York',
        originShort: 'NY',
        originHour: '07:00',
        destiny: 'Francia',
        destinyShort: 'FR',
        destinyHour: '12:00',
        flightDuration: '06h 35m',
        flight: 'B502',
        scales: 0,
        price: 3100,
    },
    {
        id: 4,
        origin: 'New York',
        originShort: 'NY',
        originHour: '07:00',
        destiny: 'Francia',
        destinyShort: 'FR',
        destinyHour: '12:00',
        flightDuration: '06h 35m',
        flight: 'B502',
        scales: 0,
        price: 3100,
    },
    {
        id: 5,
        origin: 'New York',
        originShort: 'NY',
        originHour: '07:00',
        destiny: 'Francia',
        destinyShort: 'FR',
        destinyHour: '12:00',
        flightDuration: '06h 35m',
        flight: 'B502',
        scales: 0,
        price: 3100,
    },
    {
        id: 6,
        origin: 'New York',
        originShort: 'NY',
        originHour: '07:00',
        destiny: 'Francia',
        destinyShort: 'FR',
        destinyHour: '12:00',
        flightDuration: '06h 35m',
        flight: 'B502',
        scales: 0,
        price: 3100,
    },
]

