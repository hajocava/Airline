import { useEffect, useState } from "react"
import { api } from "../../api/api"
import { Flight } from "./Flight"
import "./styles.sass"

export const FlightsList = () => {
    const [flights, setFlights] = useState([])

    const getFlights = async () => {
        const res = await api.get('/flights')
        setFlights(res.data.flights)
    }

    useEffect(() => {
        getFlights()
    }, [])

    return (
        <div className="container" style={{ paddingBottom: 100 }}>
            <div className="flight mt-4">
                {
                    flights.map((flight, index) => (
                        <div key={index} className="mb-4">
                            <Flight flight={flight} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
