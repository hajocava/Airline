
import { useState } from 'react';
import { Modal, ModalBody } from '../modal/Modal'
import { CustomLabels } from './CustomLabels';
import { ButtonInput } from './ButtonInput';
import { Footer } from './Footer';
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";

interface Props {
    placeholder?: string;
    onChange: (date: Date) => void;
}

export const DatePicker = ({ placeholder, onChange }: Props) => {
    const [show, setShow] = useState(false)
    const [selectedDate, setSelectedDate] = useState<any>(null);

    return (
        <div className='modal-date-picker'>
            <ButtonInput
                setShow={setShow}
                selectedDate={selectedDate}
                placeholder={placeholder}
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
