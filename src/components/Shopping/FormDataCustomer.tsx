import { requiredFieldMessage } from '../formSelectTrip/FormSelectTrip';
import { useFormik } from 'formik';
import { FormikFieldError } from '../layout/FormikFieldError';
import { useWizardContext } from '../stepsWizzard/WizardContext';
import * as Yup from "yup";

export const FormDataCustomer = () => {
    const { goNextPage } = useWizardContext()
    const formik = useFormik({
        initialValues: {
            names: '',
            surnames: '',
            email: '',
            address: '',
        },
        validationSchema: Yup.object({
            names: Yup.string().required(requiredFieldMessage),
            surnames: Yup.string().required(requiredFieldMessage),
            email: Yup.string().required(requiredFieldMessage),
            address: Yup.string().required(requiredFieldMessage),
        }),
        onSubmit: values => {
            goNextPage()
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="form-control">
                <input
                    type="text"
                    className='form-input'
                    placeholder='Nombres'
                    value={formik.values.names}
                    onChange={(event) => formik.setFieldValue("names", event.target.value)}
                />
                <FormikFieldError formik={formik} fieldName="names" />
            </div>
            <div className="form-control">
                <input
                    type="text"
                    className='form-input'
                    placeholder='Apellidos'
                    value={formik.values.surnames}
                    onChange={(event) => formik.setFieldValue("surnames", event.target.value)}
                />
                <FormikFieldError formik={formik} fieldName="surnames" />
            </div>
            <div className="form-control">
                <input
                    type="email"
                    className='form-input'
                    placeholder='Correo'
                    value={formik.values.email}
                    onChange={(event) => formik.setFieldValue("email", event.target.value)}
                />
                <FormikFieldError formik={formik} fieldName="email" />
            </div>
            <div className="form-control">
                <textarea
                    className='form-input'
                    placeholder='Dirección'
                    value={formik.values.address}
                    onChange={(event) => formik.setFieldValue("address", event.target.value)}
                />
                <FormikFieldError formik={formik} fieldName="address" />
            </div>
            <button
                disabled={!(formik.isValid && formik.dirty)}
                type="submit"
                className="btn primary w-100 mt-3"
                children="Continuar"
            />
        </form>
    )
}
