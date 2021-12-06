import { SelectSeats } from "../components/selectSeats/SelectSeats"
import { Wizard } from "../components/stepsWizzard/Wizard"
import { Tickets } from "../components/tickets/Tickets"


export const Flights = () => {
    return (
        <div className="container" style={{ paddingBottom: 80 }}>
            <Wizard>
                <Wizard.Pages>
                    <Tickets />
                    <SelectSeats />
                </Wizard.Pages>
                <Wizard.ButtonPrev classNames="btn secondary" />
                <Wizard.ButtonNext classNames="btn primary" />
            </Wizard>
        </div>
    )
}
