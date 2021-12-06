import { useWizardContext } from "./Wizard"

export const ButtonNext = () => {
    const { activePageIndex, goNextPage, steps } = useWizardContext()

    return (
        activePageIndex < steps - 1 ? (
            <button
                type="button"
                className="wizard-buttons-left"
                onClick={goNextPage}
            >
                Siguiente
            </button>
        ) : null
    )
}
