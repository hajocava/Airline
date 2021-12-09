import { createContext, useState } from "react";
import { useSelector } from "react-redux";
import { FlightState } from "../../redux/reducers/flightReducer";

type AuthContextProps = {
    seatsSelected: Array<string>;
    handleSelected: (seat: string) => void;
}

export const SeatContext = createContext({} as AuthContextProps);

export const SeatsContextProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const { seats }: FlightState = useSelector((state: any) => state.flightReducer)
    const [seatsSelected, setSeatsSelected] = useState<Array<string>>(seats)

    const handleSelected = (seat: string) => {
        if (!seatsSelected.includes(seat)) {
            const seats = [...seatsSelected].concat([seat])
            setSeatsSelected(seats)
        } else {
            const seats = [...seatsSelected].filter(value => value !== seat)
            setSeatsSelected(seats)
        }
    }

    return (
        <SeatContext.Provider value={{
            seatsSelected,
            handleSelected,
        }}>
            {children}
        </SeatContext.Provider>
    )
}
