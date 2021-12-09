import { ChangeAlertWithStorageListener } from "../components/ChangeAlert"
import { FormSelectTrip } from "../components/formSelectTrip/FormSelectTrip"
import { Hero } from "../components/hero/Hero"
import { useLocalStorage } from "../hooks/useLocalStorage"

export const Home = () => {
    const { sincronize } = useLocalStorage('tickets', [])

    return (
        <Hero>
            <div className='container mt-5'>
                <h1
                    children="¿Cuál será tu próxima aventura?"
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 22
                    }}
                />
                <FormSelectTrip />
                <ChangeAlertWithStorageListener sincronize={sincronize} />
            </div>
        </Hero>
    )
}
