import './styles.sass'

interface Props {
    flight: Flight
}

interface Flight {
    origin: string;
    originShort: string;
    originHour: string;
    destiny: string;
    destinyShort: string;
    destinyHour: string;
    flightDuration: string;
    flight: string;
    scales: number;
    price: number;
}

export const Ticket = ({ flight }: Props) => {
    return (
        <div className="ticket">
            <div className="flight">
                <div className="flight-hour">
                    <h3>{flight.originHour}</h3>
                    <p>{flight.originShort}</p>
                </div>
                <div className="flight-duration">
                    <div>
                        <span className="line" />
                        <i className="fas fa-plane"></i>
                        <span className="line" />
                    </div>
                    <p>{flight.flightDuration}</p>
                </div>
                <div className="flight-hour">
                    <h3>{flight.destinyHour}</h3>
                    <p>{flight.destinyShort}</p>
                </div>
            </div>

            <span className="separator-ticket left" />
            <span className="separator-ticket right" />

            <div className="flight-detail">
                <p>Vuelo {flight.flight}</p>
                <p>
                    {
                        flight.scales > 0
                            ? `Escalas ${flight.scales}`
                            : 'Sin escalas'
                    }
                </p>
                <p className="price">${flight.price} MXN</p>
            </div>
        </div>
    )
}
