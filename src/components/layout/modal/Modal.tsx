import './styles.sass'

interface Props extends JSXProp {
    size?: 'sm' | 'md' | 'lg' | 'xl'
    showCloseButton: boolean;
    show: boolean;
    setShow: (show: boolean) => void;
}

interface JSXProp {
    children: JSX.Element[] | JSX.Element
}

export const ModalHeader = ({ children }: JSXProp) => {
    return (
        <div className="modal-header">
            {children}
        </div>
    )
}

export const ModalBody = ({ children }: JSXProp) => {
    return (
        <div className="modal-body">
            {children}
        </div>
    )
}

export const ModalFooter = ({ children }: JSXProp) => {
    return (
        <div className="modal-footer">
            {children}
        </div>
    )
}

export const Modal = ({ children, show, setShow, showCloseButton, size='md' }: Props) => {
    return (
        <div className='modal' style={{ display: show ? 'block' : 'none' }}>
            <div className={`modal-content ${size}`}>
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
