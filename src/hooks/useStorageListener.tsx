import { useState, useEffect } from 'react';

export const useStorageListener = (key: string) => {
    const [storageChange, setStorageChange] = useState(false)

    const handleChange = (change: any) => {
        if (change.key === key) {
            setStorageChange(true)
        }
    }

    useEffect(() => {
        window.addEventListener('storage', handleChange)
        return () => window.removeEventListener('storage', handleChange);
        // eslint-disable-next-line
    }, []);

    return {
        storageChange,
        setStorageChange
    };
}