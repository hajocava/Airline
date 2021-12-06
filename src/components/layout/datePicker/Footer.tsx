import { DateObject } from "./date.interface"

interface Props {
    setShow: any
    selectedDate: any
    setSelectedDate: (value: any) => void;
    onChange: (date: Date) => void;
}

export const Footer = ({ onChange, selectedDate, setShow, setSelectedDate }: Props) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 20px 20px'
        }}>
            <button
                type="button"
                className="btn secondary"
                children="Cancelar"
                onClick={() => {
                    setSelectedDate(null)
                    setShow(false)
                }}
            />
            <button
                type="button"
                className="btn primary"
                children="Aplicar"
                disabled={!selectedDate}
                onClick={() => {
                    const { day, month, year }: DateObject = selectedDate
                    const today = new Date(year, month - 1, day)
                    onChange(today)
                    setShow(false)
                }}
            />
        </div>
    )
}
