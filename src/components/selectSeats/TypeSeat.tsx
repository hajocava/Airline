interface Props {
    text: string;
    colorHex: string;
}

export const TypeSeat = ({ text, colorHex }: Props) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: 10
        }}>
            <span
                style={{
                    display: 'block',
                    border: '1px solid #686868',
                    width: 30,
                    height: 23,
                    borderRadius: 5,
                    backgroundColor: colorHex
                }}
            />
            <label style={{ fontSize: 14, marginLeft: 10 }}>{text}</label>
        </div>
    )
}
