import './styles.sass'

const Separator = () => {
    return (
        <div className="separator-ticket-container">
            <span className="separator-ticket left" />
            <span className="separator-ticket right" />
        </div>
    )
}

const TicketHeader = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <div className="ticket-header">
            {children}
        </div>
    )
}

const TicketFooter = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <div className="ticket-footer">
            {children}
        </div>
    )
}

export const Ticket = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <div className="ticket">
            {children}
        </div>
    )
}

Ticket.Header = TicketHeader
Ticket.Footer = TicketFooter
Ticket.Separator = Separator
