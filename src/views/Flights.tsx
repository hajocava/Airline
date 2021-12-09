import { FlightsList } from "../components/flights/FlightsList"
import { SelectSeats } from "../components/selectSeats/SelectSeats"
import { Wizard } from "../components/stepsWizzard/Wizard"
import { FlightResume } from "../components/flights/FlightResume"
import { useSelector } from "react-redux"
import { FlightState } from "../redux/reducers/flightReducer"
import { useWizardContext } from "../components/stepsWizzard/WizardContext"
import { useNavigate } from "react-router"


const ButtonGoHome = () => {
    const { activePageIndex } = useWizardContext()
    const navigate = useNavigate()

    return (
        activePageIndex === 0 ? (
            <button
                type="button"
                className={`wizard-buttons-back`}
                onClick={() => navigate('/')}
                style={{
                    padding: 10,
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer'
                }}
            >
                <i className="fas fa-chevron-left"></i>
            </button>
        ) : null
    )
}

export const Flights = () => {
    const { origin, destiny }: FlightState = useSelector((state: any) => state.flightReducer)

    return (
        <Wizard>
            <div className="wizard-header">
                <div className="container w-100">
                    <ButtonGoHome />
                    <Wizard.ButtonBack />
                </div>
                <p className="title">{origin} - {destiny}</p>
            </div>
            <Wizard.Pages style={{ marginTop: 30 }}>
                <FlightsList />
                <SelectSeats />
                <FlightResume />
            </Wizard.Pages>
        </Wizard>
    )
}
