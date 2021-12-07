import { useState } from "react"
import { Plane } from "./Plane"
import { TypeSeat } from "./TypeSeat"

export const SelectSeats = () => {
    const total = 2
    const [selected, setSelected] = useState([])

    return (
        <div style={{ paddingBottom: 100, marginTop: 20 }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }} >
                <h3 style={{ margin: 0 }}>Elige tus asientos</h3>
                <p style={{ margin: 0 }}>{selected.length} de {total}</p>
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
    )
}
