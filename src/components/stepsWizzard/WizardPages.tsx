import { Children, CSSProperties, useEffect } from "react";
import { useWizardContext } from "./WizardContext";

interface Props {
    style?: CSSProperties
    children: JSX.Element | JSX.Element[]
}

export const WizardPages = ({ children, style = {} }: Props) => {
    const { activePageIndex, setSteps } = useWizardContext()
    const pages = Children.toArray(children)
    const steps = Children.count(children)
    const currentPage = pages[activePageIndex];

    // eslint-disable-next-line
    useEffect(() => { setSteps(steps) }, [steps])

    return (
        <div className="wizard-context" style={style}>
            {currentPage}
        </div>
    )
}
