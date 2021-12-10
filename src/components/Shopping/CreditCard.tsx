import visaLogo from "../../assets/img/visa-logo.png"
import masterCardLogo from "../../assets/img/master-card-logo.png"
import "./styles.sass"

interface Props {
    name?: string;
    numbers?: string;
    date?: string;
}

export const CreditCard = ({ name, numbers, date }: Props) => {
    return (
        <div className="credit-card">
            <img src={numbers?.charAt(0) === '5' ? masterCardLogo : visaLogo} alt={'Type card'} />
            <div className="numbers">
                <p className="name">{name}</p>
                <div>
                    <p>{numbers}</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    )
}
