interface Props {
    value: string;
    placeholder?: string;
    iconClass?: string
    setShow: (show: boolean) => void;
}

export const ButtonInput = ({ setShow, value, placeholder, iconClass }: Props) => {

    return (
        <button
            type="button"
            className="toggle"
            onClick={() => setShow(true)}
            style={{
                fontSize: 16,
                backgroundColor: 'white',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 39,
                padding: '0 10px',
                border: '1px solid #CCCCCC',
                borderRadius: 5,
                cursor: 'pointer'
            }}
        >
            <p
                style={{ color: !!value ? 'black' : '#9F9F9F' }}
                children={value ? value : placeholder}
            />
            <i
                className={iconClass}
                style={{
                    color: '#a7a7a7'
                }}
            />
        </button>
    )
}
