import { useEffect, useState } from "react"

export const useLocalStorage = <T extends Object>(itemName: string, initialValue: T) => {
    const [error, setError] = useState(false)
    const [item, setItem] = useState(initialValue)

    useEffect(() => {
        try {
            const localStorageItem = localStorage.getItem(itemName)
            let parsedItem;

            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = initialValue;
            } else {
                parsedItem = JSON.parse(localStorageItem)
            }

            setItem(parsedItem)

        } catch (error) {
            console.log(error)
            setError(true)
        }

    }, [])

    const saveItem = (newItem: any) => {
        try {
            const stringFieldItem = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringFieldItem)
            setItem(newItem)
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    return {
        error,
        item,
        saveItem
    }
}
