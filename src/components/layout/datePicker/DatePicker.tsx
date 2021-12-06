
import { Modal, ModalBody } from '../modal/Modal'
import { CustomLabels } from './CustomLabels';
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import "./styles.sass"
import { useDatePicker } from './useDatePicker';
import { ButtonInput } from './ButtonInput';

interface Props {
    placeholder?: string
}

export const DatePicker = ({ placeholder }: Props) => {
    const {show, setShow, selectedDay, setSelectedDay, formatDate} = useDatePicker()

    return (
        <div className='modal-date-picker'>
            <ButtonInput
                show={show} 
                setShow={setShow} 
                selectedDay={selectedDay} 
                formatDate={formatDate}
                placeholder={placeholder}
            />
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
