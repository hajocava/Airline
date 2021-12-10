import { FormSelectTrip } from "../components/formSelectTrip/FormSelectTrip"
import { Hero } from "../components/hero/Hero"
import axios from "axios"
import { useEffect, useState } from "react"
import { TripsState } from "../redux/reducers/tripsReducer"

export const Home = () => {
    const [trips, setTrips] = useState<any>([])

    const getTrips = async () => {
        const res = await axios.get<TripsState>('https://38c3929c-b76b-49b1-a10c-ea8ccd3eaab3.mock.pstmn.io/trips')
        setTrips(res.data.trips)
    }

    useEffect(() => {
        getTrips()
    }, [])

    return (
        <Hero>
            <div className='container mt-5' style={{ maxWidth: 400 }}>
                <h1
                    children="¿Cuál será tu próxima aventura?"
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 22,
                        marginBottom: 25,
                        textAlign: 'center'
                    }}
                />
                <FormSelectTrip trips={trips} />
            </div>
        </Hero>
    )
}
