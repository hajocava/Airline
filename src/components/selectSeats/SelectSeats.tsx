import { useContext } from "react"
import { Plane } from "./Plane"
import { SeatContext, SeatsContextProvider } from "./SeatsContext"
import { TypeSeat } from "./TypeSeat"

const TotalSelected = () => {
    const { seatsSelected } = useContext(SeatContext)
    return <p style={{ margin: 0 }}>{seatsSelected.length} de {2}</p>
}

export const SelectSeats = () => {
    return (
        <SeatsContextProvider>
            <div style={{ paddingBottom: 100, marginTop: 20 }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }} >
                    <h3 style={{ margin: 0 }}>Elige tus asientos</h3>
                    <TotalSelected />
                </div>
                <div className="container" style={{ marginTop: 20 }}>
                    <TypeSeat text="Seleccionado" colorHex="#E6AF2E" />
                    <TypeSeat text="Ocupado" colorHex="#DEDEDE" />
                    <TypeSeat text="Disponible" colorHex="#FFFFFF" />
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 50,
                }}>
                    <Plane />
                </div>
            </div>
        </SeatsContextProvider>
    )
}
