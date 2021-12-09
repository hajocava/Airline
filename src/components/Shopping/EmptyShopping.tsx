import { useNavigate } from "react-router-dom"

export const EmptyShopping = () => {
    const navigate = useNavigate()

    return (
        <div
            className="text-center"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <div>
                <i
                    className="fas fa-plane-departure color-primary"
                    style={{
                        fontSize: 64
                    }}
                />
                <h1 className="m-0 mt-4">Tu carrito esta vacio!</h1>
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
