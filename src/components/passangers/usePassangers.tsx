import { useState } from "react"

export interface PassangersInterface {
    adults: number;
    kids: number;
    babies: number
}

export type PassangerType = 'adults' | 'kids' | 'babies' 

export const usePassangers = () => {
    const [show, setShow] = useState(false)
    const [passangers, setPassangers] = useState<PassangersInterface>({
        adults: 0,
        kids: 0,
        babies: 0
    })

    const handlePassanger = (value: number, type: PassangerType) => {
        if (value >= 0) {
            setPassangers({
                ...passangers,
                [type]: value
            })
        }
    }

    const passangersToText = (): string => {
        const totalPassangers: Array<string> = []

        if (passangers.adults > 0) totalPassangers.push(`Adultos:${passangers.adults}`)
        if (passangers.kids > 0) totalPassangers.push(`Niños:${passangers.kids}`)
        if (passangers.babies > 0) totalPassangers.push(`Bebes:${passangers.babies}`)

        return totalPassangers.join(', ')
    }
    
    return {
        show,
        setShow,
        passangers,
        handlePassanger,
        passangersToText
    }
}
