import { createContext, useContext, useState } from "react";

type AuthContextProps = {
    activePageIndex: number
    steps: number
    setSteps: (steps: number) => void;
    goNextPage: () => void
    goPrevPage: () => void
}

const Context = createContext({} as AuthContextProps);

export const useWizardContext = () => {
    const context = useContext(Context)
    if (!context) {
        throw new Error('El componente no puede ir renderizardo fuera de Wizard.Pages')
    }
    return context;
}

export const WizardContext = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    const [activePageIndex, setactivePageIndex] = useState(0);
    const [steps, setSteps] = useState(0);

    const goPrevPage = () => {
        setactivePageIndex(index => index - 1)
    }
    const goNextPage = () => {
        setactivePageIndex(index => index + 1)
    }

    return (
        <Context.Provider value={{
            activePageIndex,
            steps,
            setSteps,
            goNextPage,
            goPrevPage,
        }}>
            {children}
        </Context.Provider>
    )
}
