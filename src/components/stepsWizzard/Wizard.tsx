import { createContext, useContext, useState } from "react";
import { ButtonBack } from "./ButtonBack";
import { ButtonNext } from "./ButtonNext";
import { WizardPages } from "./WizardPages";

type AuthContextProps = {
    activePageIndex: number
    steps: number
    setSteps: (steps: number) => void;
    goNextPage: () => void
    goPrevPage: () => void
}

const WizardContext = createContext({} as AuthContextProps);

export const useWizardContext = () => {
    const context = useContext(WizardContext)
    if (!context) {
        throw new Error('El componente no puede ir renderizardo fuera de Wizard.Pages')
    }
    return context;
}

export const Wizard = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const [activePageIndex, setactivePageIndex] = useState(0);
    const [steps, setSteps] = useState(0);

    const goPrevPage = () => {
        setactivePageIndex(index => index - 1)
    }
    const goNextPage = () => {
        setactivePageIndex(index => index + 1)
    }

    return (
        <WizardContext.Provider value={{
            activePageIndex,
            steps,
            setSteps,
            goNextPage,
            goPrevPage,
        }}>
            <div className="wizard">
                <div className="Wizard-content">
                    {children}
                </div>
            </div>
        </WizardContext.Provider>
    )
}

Wizard.Pages = WizardPages
Wizard.ButtonNext = ButtonNext
Wizard.ButtonPrev = ButtonBack
