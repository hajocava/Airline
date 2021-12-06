import { useState } from "react";
import { MONTHS } from "./CustomLabels";

export const useDatePicker = () => {
    const [show, setShow] = useState(false)
    const [selectedDate, setSelectedDate] = useState<any>(null);

    const dateToText = (): string  => {
        if (selectedDate) {
            const { day, month, year } = selectedDate
            return `${day} de ${MONTHS[month - 1]} ${year}`
        }
        return ''
    }

    return {
        show,
        setShow,
        selectedDate,
        setSelectedDate,
        dateToText,
    }
}
