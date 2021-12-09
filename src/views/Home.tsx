import { FormSelectTrip } from "../components/formSelectTrip/FormSelectTrip"
import { Hero } from "../components/hero/Hero"

export const Home = () => {
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
            </div>
        </Hero>
    )
}
