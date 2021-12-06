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
    
    return {
        show,
        setShow,
        passangers,
        handlePassanger
    }
}
