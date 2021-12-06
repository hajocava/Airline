
import { Modal, ModalBody } from '../modal/Modal'
import { CustomLabels } from './CustomLabels';
import { ButtonInput } from '../ButtonInput';
import { Footer } from './Footer';
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { useDatePicker } from './useDatePicker';

interface Props {
    placeholder?: string;
    onChange: (date: Date) => void;
}

export const DatePicker = ({ placeholder, onChange }: Props) => {
    const { show, setShow, selectedDate, setSelectedDate, dateToText } = useDatePicker()

    return (
        <div className='modal-date-picker'>
            <ButtonInput
                iconClass="fas fa-calendar-day"
                setShow={setShow}
                value={dateToText()}
                placeholder={placeholder || "Selecciona una fecha"}
            />
            <Modal show={show} setShow={setShow} showCloseButton={false} size='sm'>
                <ModalBody>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Calendar
                            value={selectedDate}
                            onChange={setSelectedDate}
                            locale={CustomLabels}
                            colorPrimary="#B22561"
                            renderFooter={() => (
                                <Footer
                                    onChange={onChange}
                                    selectedDate={selectedDate}
                                    setSelectedDate={setSelectedDate}
                                    setShow={setShow}
                                />
                            )}
                        />
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}
