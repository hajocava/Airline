import { Children, useEffect } from "react";
import { useWizardContext } from "./WizardContext";

export const WizardPages = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const { activePageIndex, setSteps } = useWizardContext()
    const pages = Children.toArray(children)
    const steps = Children.count(children)
    const currentPage = pages[activePageIndex];

    // eslint-disable-next-line
    useEffect(() => { setSteps(steps) }, [steps])

    return (
        <div className="wizard-context">
            {currentPage}
        </div>
    )
}
