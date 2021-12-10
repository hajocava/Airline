import { FormSelectTrip } from "../components/formSelectTrip/FormSelectTrip"
import { Hero } from "../components/hero/Hero"
import { useEffect, useState } from "react"
import { TripsState } from "../redux/reducers/tripsReducer"
import { api } from "../api/api"

export const Home = () => {
    const [trips, setTrips] = useState<any>([])

    const getTrips = async () => {
        const res = await api.get<TripsState>('/trips')
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
