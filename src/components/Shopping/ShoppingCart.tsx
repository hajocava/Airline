import { usePassangers } from "../passangers/usePassangers"
import { EmptyShopping } from "./EmptyShopping"
import { useLocalStorage } from "../../hooks/useLocalStorage"
import { FlightState } from "../../redux/reducers/flightReducer"
import { Ticket } from "../ticket/Ticket"
import { FlightDuration } from "../flights/Flight"
import { ModalFinalizePurchase } from "./ModalFinalizePurchase"

export const ShoppingCart = () => {
    const { saveItem } = useLocalStorage('tickets', [])
    const { passangersToText } = usePassangers()
    const { item, setItem } = useLocalStorage('tickets', [])

    const deleteFlightFromLocalStorage = (id: number) => {
        const newFlights = item.filter((element: FlightState) => element.flight!.id !== id)
        
        saveItem(newFlights)
        setItem(newFlights)
    }

    const calcTotal = (): number => {
        let total = 0
        item.forEach((value: FlightState) => {
            total += value.flight!.price
        })

        return total
    }

    if (item.length === 0) return <EmptyShopping />

    return (
        <div className="container" style={{ paddingBottom: 100 }}>
            <div>
                <h1 className="mb-0">Carrito</h1>
                <p className="mt-1">Total: <span style={{ fontSize: 22 }} className="color-primary bold">${calcTotal()} MXN</span></p>
                <ModalFinalizePurchase />
            </div>
            <p className="mt-5">{item.length} vuelos reservados</p>
            <div className="mt-2">
                {
                    item.map((value: FlightState, index) => (
                        <Ticket key={index} classNames="mb-4" style={{ boxShadow: '0px 5px 30px -15px rgba(0,0,0,0.48)' }}>
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
                            <div className="field-value">
                                <label>Hora de salida</label>
                                <p>{value.flight?.originHour}</p>
                            </div>
                            <div className="field-value">
                                <label>Pasajeros</label>
                                <p>{passangersToText(value.passangers)}</p>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div className="field-value">
                                    <label>Precio</label>
                                    <p className="bold color-primary">${value.flight?.price}</p>
                                </div>
                                <button
                                    onClick={() => deleteFlightFromLocalStorage(value.flight!.id)}
                                    className="btn primary"
                                    children="Eliminar"
                                    style={{ alignSelf: 'flex-end' }}
                                />
                            </div>
                        </Ticket>
                    ))
                }
            </div>
        </div>
    )
}
