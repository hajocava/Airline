import { createContext, useState } from "react";

type AuthContextProps = {
    seatsSelected: Array<string>;
    handleSelected: (seat: string) => void;
}

export const SeatContext = createContext({} as AuthContextProps);

export const SeatsContextProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const [seatsSelected, setSeatsSelected] = useState<Array<string>>([])

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
