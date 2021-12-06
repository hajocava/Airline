import { Children, createContext, useContext, useEffect, useState } from "react"

type AuthContextProps = {
    activePageIndex: number
    steps: number
    setSteps: (steps: number) => void;
    goNextPage: () => void
    goPrevPage: () => void
}

interface Props extends ChildrenJSX { }

interface ChildrenJSX {
    children: JSX.Element[] | JSX.Element
}

const WizardContext = createContext({} as AuthContextProps);

const useWizardContext = () => {
    const context = useContext(WizardContext)
    if (!context) {
        throw new Error('El componente no puede ir renderizardo fuera de Wizard.Pages')
    }
    return context;
}

const ButtonPrev = () => {
    const { activePageIndex, goPrevPage } = useContext(WizardContext)

    return (
        activePageIndex > 0 ? (
            <button
                type="button"
                className="wizard__buttons-left"
                onClick={goPrevPage}
            >
                Atras
            </button>
        ) : null
    )
}


const ButtonNext = () => {
    const { activePageIndex, goNextPage, steps } = useContext(WizardContext)

    return (
        activePageIndex < steps - 1 ? (
            <button
                type="button"
                className="wizard__buttons-left"
                onClick={goNextPage}
            >
                Siguiente
            </button>
        ) : null
    )
}


const WizardPages = ({ children }: ChildrenJSX) => {
    const { activePageIndex, setSteps } = useWizardContext()
    const pages = Children.toArray(children)
    const steps = Children.count(children)
    const currentPage = pages[activePageIndex];

    useEffect(() => {
        setSteps(steps)
        // eslint-disable-next-line
    }, [steps])

    return (
        <div className="wizard__context">
            {currentPage}
        </div>
    )
}


export const Wizard = ({ children }: Props) => {
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
Wizard.ButtonPrev = ButtonPrev
