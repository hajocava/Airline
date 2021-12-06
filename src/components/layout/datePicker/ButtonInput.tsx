import { MONTHS } from "./CustomLabels"
import { DateObject } from "./date.interface"

interface Props {
    placeholder?: string;
    selectedDate: DateObject | any
    setShow: (show: boolean) => void;
}

export const ButtonInput = ({ setShow, placeholder, selectedDate }: Props) => {

    const dateToText = (): string => {
        if (selectedDate) {
            const { day, month, year } = selectedDate
            return `${day} de ${MONTHS[month - 1]} ${year}`
        }
        else if (placeholder) return placeholder
        return 'Selecciona una fecha'
    }

    return (
        <button
            type="button"
            className="toggle"
            onClick={() => setShow(true)}
            style={{
                fontSize: 16,
                backgroundColor: 'white',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 39,
                padding: '0 10px',
                border: '1px solid #CCCCCC',
                borderRadius: 5,
                cursor: 'pointer'
            }}
        >
            <p
                style={{ color: !!selectedDate ? 'black' : '#9F9F9F' }}
                children={dateToText()}
            />
            <i
                className="fas fa-calendar-day"
                style={{
                    color: '#a7a7a7'
                }}
            />
        </button>
    )
}
