import { useState } from "react";
import { MONTHS } from "./CustomLabels";

interface Date {
    day: number;
    month: number;
    year: number;
}

export const useDatePicker = () => {
    const [show, setShow] = useState(false)
    const [selectedDay, setSelectedDay] = useState<any>(null);

    const formatDate = (placeholder: string | undefined): string => {
        if (selectedDay) {
            const { day, month, year }: Date = selectedDay
            return `${day} de ${MONTHS[month - 1]} ${year}`
        }
        else if (placeholder) return placeholder
        return 'Selecciona una fecha'
    }

    return {
        show,
        setShow,
        selectedDay,
        setSelectedDay,
        formatDate
    }
}
