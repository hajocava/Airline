import { SelectSeats } from "../components/selectSeats/SelectSeats"
import { Wizard } from "../components/stepsWizzard/Wizard"
import { Tickets } from "../components/tickets/Tickets"


export const Flights = () => {
    return (
        <Wizard>
            <div className="container mt-4">
                <Wizard.ButtonPrev />
                <Wizard.ButtonNext />
            </div>
            <Wizard.Pages>
                <Tickets />
                <SelectSeats />
            </Wizard.Pages>
        </Wizard>
    )
}
