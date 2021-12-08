import { FlightsList } from "../components/flights/FlightsList"
import { SelectSeats } from "../components/selectSeats/SelectSeats"
import { Wizard } from "../components/stepsWizzard/Wizard"
import { FlightResume } from "../components/flights/FlightResume"


export const Flights = () => {
    return (
        <Wizard>
            <div className="wizard-header">
                <div className="container w-100">
                    <Wizard.ButtonBack
                        style={{
                            padding: 10,
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: 'white'
                        }}
                    />
                </div>
                <p className="title">Nueva York - Francia</p>
            </div>
            <Wizard.Pages style={{ marginTop: 30 }}>
                <FlightsList />
                <SelectSeats />
                <FlightResume />
            </Wizard.Pages>
        </Wizard>
    )
}
