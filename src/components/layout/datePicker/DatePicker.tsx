
import { useState } from 'react'
import { Modal, ModalBody } from '../modal/Modal'
import { CustomLabels, MONTHS } from './CustomLabels';
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "./styles.sass"

interface Props {
    placeholder?: string
}

interface Date {
    day: number;
    month: number;
    year: number;
}

export const DatePicker = ({ placeholder }: Props) => {
    const [show, setShow] = useState(false)
    const [selectedDay, setSelectedDay] = useState<any>(null);

    const formatDate = () => {
        if (selectedDay) {
            const { day, month, year }: Date = selectedDay
            return `${day} de ${MONTHS[month - 1]} ${year}`
        }
        else if (placeholder) return placeholder
        return 'Selecciona una fecha'
    }

    return (
        <div className='modal-date-picker'>
            <button className="toggle" onClick={() => setShow(!show)}>
                <p style={{ color: !!selectedDay ? 'black' : '#9F9F9F' }}>
                    {formatDate()}
                </p>
                <i className="fas fa-calendar-day"></i>
            </button>
            <Modal show={show} setShow={setShow} showCloseButton={false} size='sm'>
                <ModalBody>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Calendar
                            value={selectedDay}
                            onChange={setSelectedDay}
                            locale={CustomLabels}
                            colorPrimary="#B22561"
                            renderFooter={() => (
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    margin: '0 20px 20px'
                                }}>
                                    <button
                                        className="btn secondary"
                                        children="Cancelar"
                                        onClick={() => {
                                            setSelectedDay(null)
                                            setShow(false)
                                        }}
                                    />
                                    <button
                                        className="btn primary"
                                        children="Aplicar"
                                        disabled={!selectedDay}
                                        onClick={() => {
                                            setShow(false)
                                        }}
                                    />
                                </div>
                            )}
                        />
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}
