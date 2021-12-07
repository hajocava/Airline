import { useWizardContext } from "./WizardContext"

interface Props {
    text?: string
    classNames?: string
    children?: JSX.Element[] | JSX.Element
}

export const ButtonNext = ({ text = 'Siguiente', classNames, children }: Props) => {
    const { activePageIndex, goNextPage, steps } = useWizardContext()

    return (
        activePageIndex < steps - 1 ? (
            <button
                type="button"
                className={`wizard-buttons-next ${classNames}`}
                onClick={goNextPage}
            >
                {text}
                {children}
            </button>
        ) : null
    )
}
