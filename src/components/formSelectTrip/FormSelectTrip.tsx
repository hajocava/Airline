import Select from 'react-select'
import { DatePicker } from '../layout/datePicker/DatePicker'
import { useFormik } from 'formik';

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
    const formik = useFormik({
        initialValues: {
            origin: '',
            destiny: '',
            date: ''
        },
        onSubmit: values => {
            console.log(values)
        },
    });

    return (
        <div className="card-container">
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <Select
                        placeholder='Origen'
                        options={DESTINATIONS}
                        onChange={(value) => formik.setFieldValue('origin', value?.value)}
                    />
                </div>
                <div className="form-control">
                    <Select
                        placeholder='Destino'
                        options={DESTINATIONS}
                        onChange={(value) => formik.setFieldValue('destiny', value?.value)}
                    />
                </div>
                <div className="form-control">
                    <input className="form-input" type="text" placeholder="Pasajeros" />
                </div>
                <div className="form-control">
                    <DatePicker
                        onChange={(value) => formik.setFieldValue('date', value)}
                    />
                </div>
                <button type="submit" className="btn primary w-100 mt-3">Continuar</button>
            </form>
        </div>
    )
}
