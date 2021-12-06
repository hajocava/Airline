import { ButtonInput } from "../layout/ButtonInput"
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../layout/modal/Modal"
import { Passanger } from "./Passanger"
import { PassangersInterface, usePassangers } from "./usePassangers"

interface Props {
    onChange: (passangers: PassangersInterface) => void
}

export const Passengers = ({ onChange }: Props) => {
    const { show, setShow, passangers, handlePassanger, passangersToText } = usePassangers()

    return (
        <div className="passangers">
            <ButtonInput
                setShow={setShow}
                value={passangersToText()}
                placeholder="Pasajeros"
            />
            <Modal show={show} setShow={setShow} size='sm' showCloseButton={false}>
                <div style={{ margin: '0 10px' }}>
                    <ModalHeader>
                        <h3>Pasajeros</h3>
                    </ModalHeader>
                    <ModalBody>
                        <Passanger
                            type='adults'
                            label='Adultos'
                            mutedLabel='Mayores de 12 años'
                            classIcon='fas fa-male'
                            value={passangers.adults}
                            handlePassanger={handlePassanger}
                        />
                        <Passanger
                            type='kids'
                            label='Niños'
                            mutedLabel='5 a 12 años'
                            classIcon='fas fa-child'
                            value={passangers.kids}
                            handlePassanger={handlePassanger}
                        />
                        <Passanger
                            type='babies'
                            label='Bebes'
                            mutedLabel='Menores de 5 años'
                            classIcon='fas fa-baby'
                            value={passangers.babies}
                            handlePassanger={handlePassanger}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: 20
                        }}>
                            <button
                                type="button"
                                className="btn secondary"
                                children="Cancelar"
                                onClick={() => { setShow(false) }}
                            />
                            <button
                                type="button"
                                className="btn primary"
                                children="Aplicar"
                                onClick={() => {
                                    onChange(passangers)
                                    setShow(false) 
                                }}
                            />
                        </div>
                    </ModalFooter>
                </div>
            </Modal>
        </div>
    )
}
