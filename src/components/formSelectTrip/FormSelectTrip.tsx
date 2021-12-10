import Select from 'react-select'
import { ModalWithDatePicker } from '../layout/datePicker/ModalWIthDatePicker'
import { useFormik } from 'formik';
import { Passengers } from '../passangers/Passengers';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { FormikFieldError } from '../layout/FormikFieldError';
import * as Yup from "yup";

const DESTINATIONS = [
    { value: 'Francia', label: 'Francia' },
    { value: 'Brasil', label: 'Brasil' },
    { value: 'Egipto', label: 'Egipto' },
    { value: 'Nueva York', label: 'Nueva York' },
    { value: 'Inglaterra', label: 'Inglaterra' },
    { value: 'Alemania', label: 'Alemania' },
    { value: 'México', label: 'México' },
    { value: 'Roma', label: 'Roma' },
    { value: 'India', label: 'India' },
]

export const requiredFieldMessage = "Este campo es obligatorio"

export const FormSelectTrip = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            origin: '',
            destiny: '',
            passangers: null,
            date: '',
        },
        validationSchema: Yup.object({
            origin: Yup.string().required(requiredFieldMessage),
            destiny: Yup.string().required(requiredFieldMessage),
            passangers: Yup.object().shape({
                adults: Yup.number().min(0).required(),
                kids: Yup.number().min(0).required(),
                babies: Yup.number().min(0).required(),
            }).nullable().required(requiredFieldMessage),
            date: Yup.date().required(requiredFieldMessage)
        }),
        onSubmit: values => {
            dispatch({
                type: 'SET_FORM',
                payload: values
            })
            navigate('/vuelos')
        },
    });

    const today = new Date()

    return (
        <div className="card-container">
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <Select
                        placeholder='Origen'
                        options={DESTINATIONS}
                        onChange={(value) => formik.setFieldValue('origin', value?.value)}
                    />
                    <FormikFieldError formik={formik} fieldName="origin" />
                </div>
                <div className="form-control">
                    <Select
                        placeholder='Destino'
                        options={DESTINATIONS}
                        onChange={(value) => formik.setFieldValue('destiny', value?.value)}
                    />
                    <FormikFieldError formik={formik} fieldName="destiny" />
                </div>
                <div className="form-control">
                    <Passengers onChange={(passangers) => formik.setFieldValue('passangers', passangers)} />
                    <FormikFieldError formik={formik} fieldName="passangers" />
                </div>
                <div className="form-control">
                    <ModalWithDatePicker
                        placeholder="Fecha de salida"
                        onChange={(value) => formik.setFieldValue('date', value)}
                        minimumDate={{ 
                            day: today.getDate(),
                            month: today.getMonth() + 1,
                            year: today.getFullYear()
                        }}
                    />
                    <FormikFieldError formik={formik} fieldName="date" />
                </div>
                <button
                    disabled={!(formik.isValid && formik.dirty)}
                    type="submit"
                    className="btn primary w-100 mt-3"
                    children="Continuar"
                />
            </form>
        </div>
    )
}
