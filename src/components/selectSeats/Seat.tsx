import { useContext, useState } from "react"
import { SeatContext } from "./SeatsContext"

interface Props {
    label: string;
    status: 'available' | 'busy' | 'selected'
}

export const Seat = ({ label, status }: Props) => {
    const limitPassangers = 2 // Change for context value limitPassangers form
    const { handleSelected, seatsSelected } = useContext(SeatContext)
    const [selected, setSelected] = useState(false)

    const onChange = () => {
        if (status !== 'busy') {
            // Deselect seat
            if (selected) {
                handleSelected(label)
                setSelected(false)
            }
            // Select seat only if not pass limit passangers
            else if (seatsSelected.length < limitPassangers){
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
