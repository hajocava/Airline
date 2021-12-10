import { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "../layout/modal/Modal";
import { Wizard } from "../stepsWizzard/Wizard";
import { FinishPurchase } from "./FinishPurchase";
import { FormDataCustomer } from "./FormDataCustomer";
import { PayTrips } from "./PayTrips";


export const ModalFinalizePurchase = () => {
    const [show, setShow] = useState(false)
    const [complete, setComplete] = useState(false)

    return (
        <>
            <button onClick={() => setShow(true)} className="btn primary w-100">Pagar</button>
            <Modal show={show} setShow={setShow} style={{ width: 400 }} showCloseButton={!complete}>
                {
                    !complete ? (
                        <ModalHeader>
                            <h3 className="mt-2">Necesitamos tus datos</h3>
                            <hr />
                        </ModalHeader>
                    ) : <></>
                }

                <ModalBody>
                    <Wizard>
                        <Wizard.Pages>
                            <FormDataCustomer />
                            <PayTrips />
                            <FinishPurchase setComplete={setComplete} />
                        </Wizard.Pages>
                    </Wizard>
                </ModalBody>

                <ModalFooter>

                </ModalFooter>
            </Modal>
        </>
    )
}
