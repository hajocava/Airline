import { useWizardContext } from "./Wizard"

export const ButtonBack = () => {
    const { activePageIndex, goPrevPage } = useWizardContext()

    return (
        activePageIndex > 0 ? (
            <button
                type="button"
                className="wizard-buttons-left"
                onClick={goPrevPage}
            >
                Atras
            </button>
        ) : null
    )
}
