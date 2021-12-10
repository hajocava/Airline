
import { Modal, ModalBody } from '../modal/Modal'
import { CustomLabels } from './CustomLabels';
import { ButtonInput } from '../ButtonInput';
import { Footer } from './Footer';
import { useDatePicker } from './useDatePicker';
import { Calendar, Day } from "@amir04lm26/react-modern-calendar-date-picker"
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";

interface Props {
    placeholder?: string;
    onChange: (date: Date) => void;
    minimumDate?: Day | undefined
}

export const ModalWithDatePicker = ({ placeholder, onChange, minimumDate }: Props) => {
    const { show, setShow, selectedDate, setSelectedDate, dateToText } = useDatePicker()

    return (
        <>
            <ButtonInput
                iconClass="fas fa-calendar-day"
                setShow={setShow}
                value={dateToText()}
                placeholder={placeholder || "Selecciona una fecha"}
            />
            <Modal show={show} setShow={setShow} showCloseButton={false} size='sm' classNames='p-0'>
                <ModalBody style={{ padding: 0 }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Calendar
                            minimumDate={minimumDate}
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
                                    style={{ marginTop: 20 }}
                                />
                            )}
                        />
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}
