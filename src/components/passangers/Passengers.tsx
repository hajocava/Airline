import { ButtonInput } from "../layout/ButtonInput"
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../layout/modal/Modal"
import { Passanger } from "./Passanger"
import { usePassangers } from "./usePassangers"

export const Passengers = () => {
    const { show, setShow } = usePassangers()

    return (
        <div className="passangers">
            <ButtonInput
                setShow={setShow}
                value={''}
                placeholder="Pasajeros"
            />
            <Modal show={show} setShow={setShow} size='sm' showCloseButton={false}>
                <div style={{ margin: '0 10px' }}>
                    <ModalHeader>
                        <h3>Pasajeros</h3>
                    </ModalHeader>
                    <ModalBody>
                        <Passanger
                            label='Adultos'
                            mutedLabel='Mayores de 12 años'
                            classIcon='fas fa-male'
                            value={1}
                        />
                        <Passanger
                            label='Niños'
                            mutedLabel='5 a 12 años'
                            classIcon='fas fa-child'
                            value={1}
                        />
                        <Passanger
                            label='Bebes'
                            mutedLabel='Menores de 5 años'
                            classIcon='fas fa-baby'
                            value={1}
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
                                onClick={() => {
                                    setShow(false)
                                }}
                            />
                            <button
                                type="button"
                                className="btn primary"
                                children="Aplicar"
                                onClick={() => {
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
