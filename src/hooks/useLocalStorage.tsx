import { useEffect, useState } from "react"

export const useLocalStorage = <T extends Object>(itemName: string, initialValue: T) => {
    const [error, setError] = useState(false)
    const [item, setItem] = useState(initialValue)
    const [sinronizedItem, setSinronizedItem] = useState(true)

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
            setSinronizedItem(true)

        } catch (error) {
            console.log(error)
            setError(true)
        }

        // eslint-disable-next-line
    }, [sinronizedItem])

    const saveItem = (newItem: any) => {
        try {
            const stringFieldItem = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringFieldItem)
            setItem(newItem)
            sincronize()
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    const sincronize = () => {
        setSinronizedItem(false)
    }

    return {
        error,
        item,
        saveItem,
        sincronize
    }
}
