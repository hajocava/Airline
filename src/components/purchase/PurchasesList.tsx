import { useLocalStorage } from "../../hooks/useLocalStorage"
import { FlightState } from "../../redux/reducers/flightReducer"
import { FlightDuration } from "../flights/Flight"
import { MONTHS } from "../layout/datePicker/CustomLabels"
import { usePassangers } from "../passangers/usePassangers"
import { Ticket } from "../ticket/Ticket"
import "./styles.sass"

export const PurchasesList = () => {
    const { item } = useLocalStorage('purchases', [])
    const { passangersToText } = usePassangers()

    return (
        <div>
            {
                item.map((value: FlightState, index) => {
                    const date = new Date(value.date!)
                    return (
                        <Ticket key={index} classNames="mb-4 cursor-default" style={{ boxShadow: '0px 5px 30px -15px rgba(0,0,0,0.48)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div className="field-value">
                                    <label>Origen</label>
                                    <p>{value.origin}</p>
                                </div>
                                <FlightDuration duration={value.flight!.flightDuration} />
                                <div className="field-value" style={{ textAlign: 'right' }}>
                                    <label>Destino</label>
                                    <p>{value.destiny}</p>
                                </div>
                            </div>
                            <Ticket.Separator />
                            <div className="purchase-tickets-container">
                                <div className="field-value">
                                    <label>Fecha de salida</label>
                                    <p>{`${date.getDate()} de ${MONTHS[date.getMonth()]} ${date.getFullYear()}`}</p>
                                </div>
                                <div className="field-value">
                                    <label>Pasajeros</label>
                                    <p>{passangersToText(value.passangers)}</p>
                                </div>
                                <div className="field-value">
                                    <label>Hora de salida</label>
                                    <p>{value.flight?.originHour} - {value.origin}</p>
                                </div>
                                <div className="field-value">
                                    <label>Hora de llegada</label>
                                    <p>{value.flight?.destinyHour} - {value.destiny}</p>
                                </div>
                                <div className="field-value">
                                    <label>Vuelo</label>
                                    <p>{value.flight?.flight}</p>
                                </div>
                                <div className="field-value">
                                    <label>Asientos</label>
                                    <p>{value.seats.join(', ')}</p>
                                </div>
                            </div>
                        </Ticket>
                    )
                })
            }
        </div>
    )
}
