import { withStorageListener } from "./withStorageListener"

interface Props {
    storageChange: boolean
    toggleShow: () => void
}

const ChangeAlert = ({ storageChange, toggleShow }: Props) => {
    if (storageChange) {
        return (
            <div>
                <p>Hubo cambios</p>
                <button onClick={toggleShow}>
                    Sincronizar local storage
                </button>
            </div>
        )
    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert, 'tickets')

export { ChangeAlertWithStorageListener }
