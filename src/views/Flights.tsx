import { FlightsList } from "../components/flights/FlightsList"
import { SelectSeats } from "../components/selectSeats/SelectSeats"
import { Wizard } from "../components/stepsWizzard/Wizard"
import { Resume } from "../components/flights/Resume"

export const Flights = () => {
    return (
        <Wizard>
            <div className="container mt-4">
                <Wizard.ButtonPrev />
                <Wizard.ButtonNext />
            </div>
            <Wizard.Pages>
                <FlightsList />
                <SelectSeats />
                <Resume />
            </Wizard.Pages>
        </Wizard>
    )
}
