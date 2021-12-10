import { CSSProperties } from "react"
import { useNavigate } from "react-router-dom"

interface Props {
    text: string;
    style?: CSSProperties
}

export const EmptyShopping = ({ text, style = {} }: Props) => {
    const navigate = useNavigate()

    return (
        <div
            className="text-center"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ...style
            }}
        >
            <div>
                <i
                    className="fas fa-plane-departure color-primary"
                    style={{
                        fontSize: 64
                    }}
                />
                <h1 className="m-0 mt-4">{text}</h1>
                <p className="m-0">Comienza a explorar nuevos destinos</p>
                <button
                    className="btn primary mt-5"
                    children="Explorar"
                    onClick={() => navigate('/')}
                />
            </div>
        </div>
    )
}
