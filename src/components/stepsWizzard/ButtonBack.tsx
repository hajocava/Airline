import { CSSProperties } from "react"
import { useWizardContext } from "./WizardContext"

interface Props {
    classNames?: string;
    style?: CSSProperties;
}

export const ButtonBack = ({ classNames, style }: Props) => {
    const { activePageIndex, goPrevPage } = useWizardContext()

    return (
        activePageIndex > 0 ? (
            <button
                type="button"
                className={`wizard-buttons-back ${classNames}`}
                onClick={goPrevPage}
                style={{
                    ...style,
                    cursor: 'pointer'
                }}
            >
                <i className="fas fa-chevron-left"></i>
            </button>
        ) : null
    )
}
