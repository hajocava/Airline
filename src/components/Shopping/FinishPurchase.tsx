import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "../../hooks/useLocalStorage"

interface Props {
    setComplete: (flag: boolean) => void;
}

export const FinishPurchase = ({ setComplete }: Props) => {
    const { saveItem } = useLocalStorage('tickets', [])
    const navigate = useNavigate()

    useEffect(() => {
        setComplete(true)
        // eslint-disable-next-line
    }, [])

    return (
        <div className="text-center">
            <h1>Gracias por tu reserva!</h1>
            <button
                children="Cerrar"
                className="btn primary mt-4"
                onClick={() => {
                    saveItem([])
                    navigate('/')
                }}
            />
        </div>
    )
}
