import { CSSProperties } from 'react'
import './styles.sass'

interface Props extends JSXProp, ClassNames {
    size?: 'sm' | 'md' | 'lg' | 'xl'
    showCloseButton?: boolean;
    show: boolean;
    setShow: (show: boolean) => void;
    style?: CSSProperties;
}

interface JSXProp extends StyleProp, ClassNames {
    children: JSX.Element[] | JSX.Element
}

interface StyleProp {
    style?: CSSProperties;
}

interface ClassNames {
    classNames?: string
}

export const ModalHeader = ({ children, style = {}, classNames }: JSXProp) => {
    return (
        <div className={`modal-header ${classNames}`} style={{ ...style }}>
            {children}
        </div>
    )
}

export const ModalBody = ({ children, style = {}, classNames }: JSXProp) => {
    return (
        <div className={`modal-body ${classNames}`} style={{ ...style }}>
            {children}
        </div>
    )
}

export const ModalFooter = ({ children, style = {}, classNames }: JSXProp) => {
    return (
        <div className={`modal-footer ${classNames}`} style={{ ...style }}>
            {children}
        </div>
    )
}

export const Modal = ({ children, show, setShow, showCloseButton = true, size = 'md', style = {}, classNames }: Props) => {
    return (
        <div className='modal' style={{ display: show ? 'block' : 'none' }}>
            <div className={`modal-content ${size} ${classNames}`} style={{ ...style }}>
                {
                    showCloseButton && (
                        <span className="close" onClick={() => setShow(false)}>
                            &times;
                        </span>
                    )
                }
                {children}
            </div>
        </div>
    )
}
