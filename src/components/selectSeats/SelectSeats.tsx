import { Plane } from "./Plane"
import { SeatsContextProvider } from "./SeatsContext"
import { TotalSeatsSelected } from "./TotalSeatsSelected"
import { TypeSeat } from "./TypeSeat"

export const SelectSeats = () => {

    return (
        <SeatsContextProvider>
            <div style={{ paddingBottom: 100, marginTop: 20 }}>
                <TotalSeatsSelected limitSeats={2} />
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
