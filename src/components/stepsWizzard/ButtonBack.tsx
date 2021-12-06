import { useWizardContext } from "./Wizard"

interface Props {
    text?: string
    classNames?: string
    children?: JSX.Element[] | JSX.Element
}

export const ButtonBack = ({ text = 'Atras', classNames, children }: Props) => {
    const { activePageIndex, goPrevPage } = useWizardContext()

    return (
        activePageIndex > 0 ? (
            <button
                type="button"
                className={`wizard-buttons-back ${classNames}`}
                onClick={goPrevPage}
            >
                {text}
                {children}
            </button>
        ) : null
    )
}
