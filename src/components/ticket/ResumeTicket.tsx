import { Ticket } from "./Ticket"

export const ResumeTicket = () => {
    return (
        <div className="container">
            <Ticket>
                <Ticket.Header>
                    <p style={{ margin: 0 }}>El header</p>
                </Ticket.Header>

                <Ticket.Separator />

                <Ticket.Footer>
                    <p style={{ margin: 0 }}>El footer</p>
                </Ticket.Footer>
            </Ticket>
        </div>
    )
}
