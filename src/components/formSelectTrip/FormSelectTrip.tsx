import Select from 'react-select'
import { DatePicker } from '../layout/datePicker/DatePicker'

const DESTINATIONS = [
    { value: 'Francia', label: 'Francia' },
    { value: 'Italia', label: 'Brasil' },
    { value: 'Egipto', label: 'Egipto' },
    { value: 'Nueva York', label: 'Nueva York' },
    { value: 'Inglaterra', label: 'Inglaterra' },
    { value: 'Alemania', label: 'Alemania' },
    { value: 'México', label: 'México' },
    { value: 'Roma', label: 'Roma' },
    { value: 'India', label: 'India' },
]

export const FormSelectTrip = () => {
    return (
        <div className="card-container">
            <form onSubmit={(event) => {
                event.preventDefault()
            }}>
                <div className="form-control">
                    <Select placeholder='Origen' options={DESTINATIONS} />
                </div>
                <div className="form-control">
                    <Select placeholder='Destino' options={DESTINATIONS} />
                </div>
                <div className="form-control">
                    <input className="form-input" type="text" placeholder="Pasajeros" />
                </div>
                <div className="form-control">
                    <DatePicker />
                </div>
                <button className="btn primary w-100 mt-3">Continuar</button>
            </form>
        </div>
    )
}
