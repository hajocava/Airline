import { useContext } from "react"
import { SeatContext } from "./SeatsContext"

interface Props {
    limitSeats: number
}

export const TotalSeatsSelected = ({ limitSeats }: Props) => {
    const { seatsSelected } = useContext(SeatContext)
    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }} >
            <h3 style={{ margin: 0 }}>Elige tus asientos</h3>
            <p style={{ margin: 0 }}>{seatsSelected.length} de {limitSeats}</p>
        </div>
    )
}
