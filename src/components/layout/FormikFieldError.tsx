interface Props {
    formik: any,
    fieldName: string;
}

export const FormikFieldError = ({ formik, fieldName }: Props) => {
    return (
        <>
            {formik.touched[fieldName] && formik.errors[fieldName] && (
                <p
                    children={formik.errors[fieldName]}
                    style={{
                        color: "#e44444",
                        marginTop: 5,
                        fontSize: 14,
                        marginBottom: 0
                    }}
                />
            )}
        </>
    )
}
