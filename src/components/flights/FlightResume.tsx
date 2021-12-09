import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { FlightState } from "../../redux/reducers/flightReducer"
import { MONTHS } from "../layout/datePicker/CustomLabels"
import { usePassangers } from "../passangers/usePassangers"

export const FlightResume = () => {
    const navigate = useNavigate()
    const { passangersToText } = usePassangers()
    const { origin, destiny, passangers, date, seats }: FlightState = useSelector((state: any) => state.flightReducer)


    return (
        <div className="container" style={{ paddingBottom: 80 }}>
            <h2 className="mb-0">Resumen</h2>
            <p className="mt-1 mb-4">Revisa que todos los datos esten bien</p>
            <div className="card-container">
                <div className="field-value">
                    <label>Origen</label>
                    <p>{origin}</p>
                </div>
                <div className="field-value">
                    <label>Destino</label>
                    <p>{destiny}</p>
                </div>
                <div className="field-value">
                    <label>Fecha de salida</label>
                    <p>{`${date!.getDate()} de ${MONTHS[date!.getMonth()]} ${date!.getFullYear()}`}</p>
                </div>
                <div className="field-value">
                    <label>Hora de salida</label>
                    <p>10:30 AM Hora Nueva York</p>
                </div>
                <div className="field-value">
                    <label>Hora de llegada</label>
                    <p>16:40 PM Hora Francia</p>
                </div>
                <div className="field-value">
                    <label>Pasajeros</label>
                    <p>{passangersToText(passangers)}</p>
                </div>
                <div className="field-value">
                    <label>Asientos</label>
                    <p>{seats.join(', ')}</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                    className="btn primary mt-4" style={{ width: 180 }}
                    onClick={() => { navigate('/') }}
                    children="Reservar"
                />
            </div>
        </div>
    )
}
