import './styles.sass'
import { PassangerType } from './usePassangers'

interface Props {
    label: string;
    mutedLabel: string;
    classIcon: string;
    value: number;
    type: PassangerType
    handlePassanger: (value: number, type: PassangerType) => void
}

export const Passanger = ({ label, mutedLabel, classIcon, value, type, handlePassanger }: Props) => {
    return (
        <div className="passanger">
            <div className="passanger-container">
                <i className={classIcon}></i>
                <div>
                    <h4>{label}</h4>
                    <p>{mutedLabel}</p>
                </div>
            </div>
            <div className="buttons">
                <button
                    onClick={() => handlePassanger(value - 1, type)}
                    type="button"
                    className="substract"
                    children='-'
                />
                <label children={value} />
                <button
                    onClick={() => handlePassanger(value + 1, type)}
                    type="button"
                    className="plus"
                    children='+'
                />
            </div>
        </div >
    )
}
