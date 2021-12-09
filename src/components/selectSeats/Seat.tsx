import { useContext, useState } from "react"
import { useSelector } from "react-redux"
import { FlightState } from "../../redux/reducers/flightReducer"
import { SeatContext } from "./SeatsContext"

interface Props {
    label: string;
    status: 'available' | 'busy' | 'selected'
}

export const Seat = ({ label, status }: Props) => {

    const { seats, passangers }: FlightState = useSelector((state: any) => state.flightReducer)
    const { handleSelected, seatsSelected } = useContext(SeatContext)
    const [selected, setSelected] = useState(seats.includes(label))

    const totalPassangers = passangers.adults + passangers.kids + passangers.babies

    const onChange = () => {
        if (status !== 'busy') {
            // Deselect seat
            if (selected) {
                handleSelected(label)
                setSelected(false)
            }
            // Select seat only if not pass limit passangers
            else if (seatsSelected.length < totalPassangers){
                handleSelected(label)
                setSelected(true)
            }
        }
    }

    return (
        <div
            className={`seat ${
                status === 'busy' ? 'busy' 
                : selected ? 'selected' 
                : 'available'}`
            }
            onClick={onChange}
        >
            <p>{label}</p>
        </div>
    )
}
