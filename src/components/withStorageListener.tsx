import { useState } from "react"

interface Props {
    sincronize: () => void;
}

export const withStorageListener = (WrappedComponent: any, keyStorage: string) => {
    return function WrappedComponentWithStorageListener({ sincronize }: Props) {
        const [storageChange, setStorageChange] = useState(false)

        window.addEventListener('storage', (change) => {
            if (change.key === keyStorage) {
                setStorageChange(true)
            }
        })

        const toggleShow = () => {
            sincronize()
            setStorageChange(false)
        }

        return (
            <WrappedComponent
                storageChange={storageChange}
                toggleShow={toggleShow}
            />
        )
    }
}
