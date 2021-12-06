
import { useState } from 'react'
import { Modal, ModalBody } from '../modal/Modal'
import { Calendar } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { CustomLabels } from './CustomLabels';


export const DatePicker = () => {
    const [show, setShow] = useState(false)
    const [selectedDay, setSelectedDay] = useState<any>(null);

    return (
        <div>
            <button
                type="button"
                onClick={() => setShow(!show)}
                children="show modal"
            />
            <Modal show={show} setShow={setShow} showCloseButton={false}>
                <ModalBody>
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
                </ModalBody>
            </Modal>
        </div>
    )
}
