import { useContext, useState } from "react"
import { SeatContext } from "./SeatsContext"

interface Props {
    label: string;
    status: 'available' | 'busy' | 'selected'
}


export const Seat = ({ label, status }: Props) => {
    const { handleSelected } = useContext(SeatContext)
    const [selected, setSelected] = useState(false)

    const onChange = () => {
        handleSelected(label)
        if (status !== 'busy') {
            if (selected) {
                setSelected(false)
            } else {
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
