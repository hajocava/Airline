
import { ButtonBack } from "./ButtonBack";
import { ButtonNext } from "./ButtonNext";
import { WizardContext } from "./WizardContext";
import { WizardPages } from "./WizardPages";

export const Wizard = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <WizardContext>
            <div className="wizard">
                <div className="Wizard-content">
                    {children}
                </div>
            </div>
        </WizardContext>
    )
}

Wizard.Pages = WizardPages
Wizard.ButtonNext = ButtonNext
Wizard.ButtonPrev = ButtonBack
