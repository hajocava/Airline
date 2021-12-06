import { FormSelectTrip } from "../components/formSelectTrip/FormSelectTrip"
import { Hero } from "../components/hero/Hero"

export const Home = () => {
    return (
        <Hero>
            <div className='container'>
                <h1 
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 22
                    }}
                >
                    ¿Cuál será tu próxima aventura?
                </h1>
                <FormSelectTrip />
            </div>
        </Hero>
    )
}
