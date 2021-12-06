interface Props {
    placeholder?: string;
    show: boolean;
    setShow: (show: boolean) => void;
    formatDate: (placeholder: string | undefined) => string;
    selectedDay: any
}

export const ButtonInput = ({ show, setShow, formatDate, placeholder, selectedDay }: Props) => {
    return (
        <button className="toggle" onClick={() => setShow(!show)}>
            <p
                style={{ color: !!selectedDay ? 'black' : '#9F9F9F' }}
                children={formatDate(placeholder)}
            />
            <i className="fas fa-calendar-day" />
        </button>
    )
}
