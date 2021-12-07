interface SeatInterface {
    label: string;
    status: 'available' | 'busy' | 'selected'
}

const seatsA: Array<SeatInterface> = [
    { label: 'A1', status: 'available' },
    { label: 'A2', status: 'busy' },
    { label: 'A3', status: 'busy' },
    { label: 'A4', status: 'available' },
    { label: 'A5', status: 'available' },
    { label: 'A6', status: 'available' },
    { label: 'A7', status: 'available' },
    { label: 'A8', status: 'available' },
    { label: 'A9', status: 'available' },
]

const seatsB: Array<SeatInterface> = [
    { label: 'B1', status: 'available' },
    { label: 'B2', status: 'available' },
    { label: 'B3', status: 'available' },
    { label: 'B4', status: 'available' },
    { label: 'B5', status: 'available' },
    { label: 'B6', status: 'busy' },
    { label: 'B7', status: 'available' },
    { label: 'B8', status: 'available' },
    { label: 'B9', status: 'available' },
]

const seatsC: Array<SeatInterface> = [
    { label: 'C1', status: 'available' },
    { label: 'C2', status: 'busy' },
    { label: 'C3', status: 'available' },
    { label: 'C4', status: 'available' },
    { label: 'C5', status: 'available' },
    { label: 'C6', status: 'available' },
    { label: 'C7', status: 'available' },
    { label: 'C8', status: 'available' },
    { label: 'C9', status: 'available' },
]

const seatsD: Array<SeatInterface> = [
    { label: 'D1', status: 'available' },
    { label: 'D2', status: 'available' },
    { label: 'D3', status: 'available' },
    { label: 'D4', status: 'available' },
    { label: 'D5', status: 'busy' },
    { label: 'D6', status: 'available' },
    { label: 'D7', status: 'busy' },
    { label: 'D8', status: 'available' },
    { label: 'D9', status: 'available' },
]

const seatsE: Array<SeatInterface> = [
    { label: 'E1', status: 'available' },
    { label: 'E2', status: 'available' },
    { label: 'E3', status: 'available' },
    { label: 'E4', status: 'available' },
    { label: 'E5', status: 'available' },
    { label: 'E6', status: 'selected' },
    { label: 'E7', status: 'selected' },
    { label: 'E8', status: 'available' },
    { label: 'E9', status: 'available' },
]

const seatsF: Array<SeatInterface> = [
    { label: 'F1', status: 'available' },
    { label: 'F2', status: 'available' },
    { label: 'F3', status: 'busy' },
    { label: 'F4', status: 'available' },
    { label: 'F5', status: 'available' },
    { label: 'F6', status: 'available' },
    { label: 'F7', status: 'available' },
    { label: 'F8', status: 'available' },
    { label: 'F9', status: 'available' },
]

const seatsG: Array<SeatInterface> = [
    { label: 'G1', status: 'available' },
    { label: 'G2', status: 'available' },
    { label: 'G3', status: 'available' },
    { label: 'G4', status: 'available' },
    { label: 'G5', status: 'busy' },
    { label: 'G6', status: 'available' },
    { label: 'G7', status: 'available' },
    { label: 'G8', status: 'available' },
    { label: 'G9', status: 'available' },
]

const seatsH: Array<SeatInterface> = [
    { label: 'H1', status: 'available' },
    { label: 'H2', status: 'available' },
    { label: 'H3', status: 'available' },
    { label: 'H4', status: 'available' },
    { label: 'H5', status: 'available' },
    { label: 'H6', status: 'available' },
    { label: 'H7', status: 'busy' },
    { label: 'H8', status: 'available' },
    { label: 'H9', status: 'available' },
]

const seatsI: Array<SeatInterface> = [
    { label: 'I1', status: 'available' },
    { label: 'I2', status: 'available' },
    { label: 'I3', status: 'available' },
    { label: 'I4', status: 'available' },
    { label: 'I5', status: 'busy' },
    { label: 'I6', status: 'available' },
    { label: 'I7', status: 'available' },
    { label: 'I8', status: 'available' },
    { label: 'I9', status: 'available' },
]

export const sectionsA = [seatsA, seatsB, seatsC]
export const sectionsB = [seatsD, seatsE, seatsF]
export const sectionsC = [seatsG, seatsH, seatsI]
