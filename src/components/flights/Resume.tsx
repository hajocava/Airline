import { Ticket } from "../ticket/Ticket"

export const Resume = () => {
    return (
        <div className="container" style={{ paddingBottom: 80, marginTop: 20 }}>
            <Ticket>
                <Ticket.Header>
                    <div className="field-value">
                        <label>Nombre</label>
                        <p>Haziel Josué Castillo Vázquez</p>
                    </div>
                    <div className="field-value">
                        <label>Teléfono</label>
                        <p>4437248880</p>
                    </div>
                    <div className="field-value">
                        <label>Dirección</label>
                        <p>San Francisco #50</p>
                    </div>
                </Ticket.Header>

                <Ticket.Separator />

                <Ticket.Footer>
                    <div className="field-value">
                        <label>Origen</label>
                        <p>Nueva York</p>
                    </div>
                    <div className="field-value">
                        <label>Destino</label>
                        <p>Francia</p>
                    </div>
                    <div className="field-value">
                        <label>Fecha de salida</label>
                        <p>Jueves 19 de Diciembre</p>
                    </div>
                    <div className="field-value">
                        <label>Hora de salida</label>
                        <p>10:30 AM Hora Nueva York</p>
                    </div>
                    <div className="field-value">
                        <label>Hora de llegada</label>
                        <p>16:40 PM Hora Francia</p>
                    </div>
                    <div className="field-value">
                        <label>Pasajeros</label>
                        <p>2 Adultos, 1 Niño</p>
                    </div>
                    <div className="field-value">
                        <label>Asientos</label>
                        <p>B3, B4</p>
                    </div>
                </Ticket.Footer>
            </Ticket>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="btn primary mt-4" style={{ width: 180 }}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}
