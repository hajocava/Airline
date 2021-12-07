import Select from 'react-select'
import { DatePicker } from '../layout/datePicker/DatePicker'
import { useFormik } from 'formik';
import { Passengers } from '../passangers/Passengers';
import { useNavigate } from 'react-router';

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
    const navigate = useNavigate()
    
    const formik = useFormik({
        initialValues: {
            origin: '',
            destiny: '',
            passangers: {},
            date: '',
        },
        onSubmit: values => {
            navigate('/vuelos')
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
                    <Passengers onChange={(passangers) => formik.setFieldValue('passangers', passangers)} />
                </div>
                <div className="form-control">
                    <DatePicker
                        placeholder="Fecha de salida"
                        onChange={(value) => formik.setFieldValue('date', value)}
                    />
                </div>
                <button type="submit" className="btn primary w-100 mt-3">Continuar</button>
            </form>
        </div>
    )
}
