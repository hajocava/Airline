import { useState } from "react"

export const usePassangers = () => {
    const [show, setShow] = useState(false)
    
    return {
        show,
        setShow
    }
}
