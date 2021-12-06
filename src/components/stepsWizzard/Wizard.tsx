import { Children, createContext, useContext, useState } from "react"

type AuthContextProps = {
    totalPages: number
    activePageIndex: number
    goNextPage: () => void
    goPrevPage: () => void
}

interface Props extends ChildrenJSX { }

interface ChildrenJSX {
    children: JSX.Element[] | JSX.Element
}

const WizardContext = createContext({} as AuthContextProps);

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
    const { activePageIndex, goNextPage, totalPages } = useContext(WizardContext)

    return (
        activePageIndex < totalPages - 1 ? (
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


const Pages = ({ children }: ChildrenJSX) => {
    const { activePageIndex } = useContext(WizardContext)
    const pages = Children.toArray(children)
    const currentPage = pages[activePageIndex];

    return (
        <div className="wizard__context">
            {currentPage}
        </div>
    )
}


export const Wizard = ({ children }: Props) => {
    const [activePageIndex, setactivePageIndex] = useState(0);

    const goPrevPage = () => {
        setactivePageIndex(index => index - 1)
    }
    const goNextPage = () => {
        setactivePageIndex(index => index + 1)
    }

    const context = {
        totalPages: Children.toArray(children).length,
        activePageIndex,
        goNextPage,
        goPrevPage,
    }

    return (
        <WizardContext.Provider value={context}>
            <div className="wizard">
                <div className="Wizard-content">
                    {children}
                </div>
            </div>
        </WizardContext.Provider>
    )
}

Wizard.Pages = Pages
Wizard.ButtonNext = ButtonNext
Wizard.ButtonPrev = ButtonPrev
