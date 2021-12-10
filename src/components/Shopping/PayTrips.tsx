import { requiredFieldMessage } from '../formSelectTrip/FormSelectTrip';
import { useWizardContext } from '../stepsWizzard/WizardContext';
import { CreditCard } from './CreditCard'
import { useFormik } from 'formik';
import * as Yup from "yup";
import { FormikFieldError } from '../layout/FormikFieldError';


export const PayTrips = () => {
    const { goNextPage } = useWizardContext()
    const formik = useFormik({
        initialValues: {
            name: '',
            numbers: '',
            date: '',
            securityCode: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required(requiredFieldMessage),
            numbers: Yup.string().required(requiredFieldMessage),
            date: Yup.string().required(requiredFieldMessage),
            securityCode: Yup.string().required(requiredFieldMessage),
        }),
        onSubmit: values => {
            goNextPage()
        },
    });

    const { name, numbers, date } = formik.values

    return (
        <form onSubmit={formik.handleSubmit}>
            <CreditCard name={name} numbers={numbers} date={date} />
            <div style={{ marginTop: 30 }}>
                <div className="form-control">
                    <input
                        type="text"
                        className='form-input'
                        placeholder='Nombre en la tarjeta'
                        value={formik.values.name}
                        onChange={(event) => formik.setFieldValue("name", event.target.value)}
                    />
                    <FormikFieldError formik={formik} fieldName="name" />
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        className='form-input'
                        placeholder='Numeros de tarjeta'
                        value={formik.values.numbers}
                        onChange={(event) => {
                            let text = event.target.value
                            if (text.length >= 0 && text.length < 20) {
                                formik.setFieldValue("numbers", text)
                            }
                        }}
                    />
                    <FormikFieldError formik={formik} fieldName="numbers" />
                </div>
                <div className="form-control">
                    <input
                        style={{ width: 170 }}
                        type="text"
                        className='form-input'
                        placeholder='Fecha de caducidad'
                        value={formik.values.date}
                        onChange={(event) => {
                            let text = event.target.value
                            if (text.length >= 0 && text.length < 6) {
                                formik.setFieldValue("date", event.target.value)
                            }
                        }}
                    />
                    <FormikFieldError formik={formik} fieldName="date" />
                </div>
                <div className="form-control">
                    <input
                        style={{ width: 170 }}
                        type="text"
                        className='form-input'
                        placeholder='Código de seguridad'
                        value={formik.values.securityCode}
                        onChange={(event) => {
                            let text = event.target.value
                            if (text.length >= 0 && text.length < 4) {
                                formik.setFieldValue("securityCode", event.target.value)
                            }
                        }}
                    />
                    <FormikFieldError formik={formik} fieldName="securityCode" />
                </div>
                <button
                    disabled={!(formik.isValid && formik.dirty)}
                    type="submit"
                    className="btn primary w-100 mt-3"
                    children="Continuar"
                />
            </div>
        </form>
    )
}
