import uniqid from 'uniqid';
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { FlightState } from "../../redux/reducers/flightReducer"
import { MONTHS } from "../layout/datePicker/CustomLabels"
import { usePassangers } from "../passangers/usePassangers"

export const FlightResume = () => {
    const navigate = useNavigate()
    const { passangersToText } = usePassangers()
    const { item, saveItem } = useLocalStorage('tickets', [])
    const { origin, destiny, passangers, date, seats, flight }: FlightState = useSelector((state: any) => state.flightReducer)

    const saveReserve = () => {
        saveItem([...item, {
            origin,
            destiny,
            passangers,
            date,
            seats,
            flight: {
                ...flight,
                id: uniqid()
            }
        }])
        navigate('/')
    }

    const ButtonReserve = () => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
                className="btn primary w-100"
                onClick={saveReserve}
                children="Agregar al carrito"
            />
        </div>
    )

    return (
        <div className="container" style={{ paddingBottom: 80 }}>
            <h2 className="mb-0">Resumen</h2>
            <p className="mt-1 mb-4">Revisa que los datos esten correctos</p>
            <div className='mt-0 mb-5 w-100'>
                <ButtonReserve />
            </div>
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
                    <p>{flight?.originHour} - {origin}</p>
                </div>
                <div className="field-value">
                    <label>Hora de llegada</label>
                    <p>{flight?.destinyHour} - {destiny}</p>
                </div>
                <div className="field-value">
                    <label>Pasajeros</label>
                    <p>{passangersToText(passangers)}</p>
                </div>
                <div className="field-value">
                    <label>Vuelo</label>
                    <p>{flight?.flight}</p>
                </div>
                <div className="field-value">
                    <label>Asientos</label>
                    <p>{seats.join(', ')}</p>
                </div>
                <div className="field-value">
                    <label>Escalas</label>
                    <p>{flight?.scales === 0 ? 'Sin escalas' : flight?.scales}</p>
                </div>
                <div className="field-value">
                    <label>Precio</label>
                    <p className="color-primary bold">${flight?.price}</p>
                </div>
            </div>
            <div className='mt-5 mb-5'>
                <ButtonReserve />
            </div>
        </div>
    )
}
