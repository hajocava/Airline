
import './styles.sass'

interface Props {
    children: JSX.Element[] | JSX.Element
}

export const Hero = ({ children }: Props) => {
    return (
        <div className='hero'>
            <div className="content">
                { children }
            </div>
        </div>
    )
}
