import { useState } from "react"

interface Props {
    label: string;
    status: 'available' | 'busy' | 'selected'
}


export const Seat = ({ label, status }: Props) => {
    const [selected, setSelected] = useState(false)

    const handleSelected = () => {
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
            onClick={handleSelected}
        >
            <p>{label}</p>
        </div>
    )
}
