import axios from "axios"
import { useEffect, useState } from "react"
import { Flight } from "./Flight"
import "./styles.sass"

export const FlightsList = () => {
    const [flights, setFlights] = useState([])

    const getFlights = async () => {
        const res = await axios.get('https://38c3929c-b76b-49b1-a10c-ea8ccd3eaab3.mock.pstmn.io/flights')
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
