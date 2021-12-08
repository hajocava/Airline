import { CSSProperties } from "react"
import { useWizardContext } from "./WizardContext"

interface Props {
    classNames?: string
    style?: CSSProperties
    disabled?: boolean
}

export const ButtonNext = ({ classNames, style = {}, disabled }: Props) => {
    const { activePageIndex, goNextPage, steps } = useWizardContext()

    return (
        activePageIndex < steps - 1 ? (
            <button
                type="button"
                className={`wizard-buttons-next ${classNames}`}
                onClick={goNextPage}
                disabled={disabled}
                style={{
                    ...style,
                    cursor: 'pointer'
                }}
            >
                Continuar
            </button>
        ) : null
    )
}
