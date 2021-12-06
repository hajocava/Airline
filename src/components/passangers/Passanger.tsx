import './styles.sass'

interface Props {
    label: string;
    mutedLabel: string;
    classIcon: string;
    value: number
}

export const Passanger = ({ label, mutedLabel, classIcon, value }: Props) => {
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
                <button type="button" className="substract" children='-' />
                <label>{value}</label>
                <button type="button" className="plus" children='+' />
            </div>
        </div >
    )
}
