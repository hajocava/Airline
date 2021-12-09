import { usePassangers } from "../components/passangers/usePassangers"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { FlightState } from "../redux/reducers/flightReducer"

export const ShoppingCart = () => {
    const { saveItem } = useLocalStorage('tickets', [])
    const { passangersToText } = usePassangers()
    const { item, setItem } = useLocalStorage('tickets', [])

    const deleteFlightFromLocalStorage = (id: number) => {
        const newFlights = item.filter((element: FlightState) => element.flight!.id !== id)
        
        saveItem(newFlights)
        setItem(newFlights)
    }



    return (
        <div className="container" style={{ paddingBottom: 100 }}>
            <h1 className="mb-0">Carrito</h1>
            <p className="mt-2">{item.length} vuelos reservados</p>
            <div className="mt-5">
                {
                    item.map((value: FlightState, index) => (
                        <div key={index} className="card-container mb-4">
                            <div className="field-value">
                                <label>Origen</label>
                                <p>{value.origin}</p>
                            </div>
                            <div className="field-value">
                                <label>Destino</label>
                                <p>{value.destiny}</p>
                            </div>
                            <div className="field-value">
                                <label>Hora de salida</label>
                                <p>{value.flight?.originHour}</p>
                            </div>
                            <div className="field-value">
                                <label>Pasajeros</label>
                                <p>{passangersToText(value.passangers)}</p>
                            </div>
                            <div className="field-value">
                                <label>Precio</label>
                                <p className="bold color-primary">${value.flight?.price}</p>
                            </div>
                            <div>
                                <button
                                    onClick={() => deleteFlightFromLocalStorage(value.flight!.id)}
                                    className="btn primary"
                                    children="Eliminar"
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
