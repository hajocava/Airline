import { Wizard } from "../components/stepsWizzard/Wizard"
import { Tickets } from "../components/tickets/Tickets"

const Page2 = () => <h1>Page 2</h1>
const Page3 = () => <h1>Page 3</h1>

export const Flights = () => {
    return (
        <div className="container" style={{ paddingBottom: 80 }}>
            <Wizard>
                <Wizard.Pages>
                    <Tickets />
                    <Page2 />
                    <Page3 />
                </Wizard.Pages>
                <Wizard.ButtonPrev classNames="btn secondary" />
                <Wizard.ButtonNext classNames="btn primary" />
            </Wizard>
        </div>
    )
}
