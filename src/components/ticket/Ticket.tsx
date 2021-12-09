import { CSSProperties } from 'react'
import './styles.sass'

interface JSX { children: JSX.Element | JSX.Element[] }

interface Props extends JSX {
    style?: CSSProperties,
    classNames?: string
}

const Separator = () => {
    return (
        <div className="separator-ticket-container">
            <span className="separator-ticket left" />
            <span className="separator-ticket right" />
        </div>
    )
}

const TicketHeader = ({ children }: JSX) => {
    return (
        <div className="ticket-header">
            {children}
        </div>
    )
}

const TicketFooter = ({ children }: JSX) => {
    return (
        <div className="ticket-footer">
            {children}
        </div>
    )
}

export const Ticket = ({ children, style = {}, classNames }: Props) => {
    return (
        <div className={`ticket ${classNames}`} style={{ ...style }}>
            {children}
        </div>
    )
}

Ticket.Header = TicketHeader
Ticket.Footer = TicketFooter
Ticket.Separator = Separator
