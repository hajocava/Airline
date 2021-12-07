import { Ticket } from "../ticket/Ticket"

interface Props {
    flight: FlightInterface
}

interface FlightInterface {
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

export const Flight = ({ flight }: Props) => {
    return (
        <Ticket>
            <Ticket.Header>
                <div className="flight-header">
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
            </Ticket.Header>

            <Ticket.Separator />

            <Ticket.Footer>
                <div className="flight-footer">
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
            </Ticket.Footer>
        </Ticket>
    )
}