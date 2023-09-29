'use client'
import { useState, useEffect } from "react";

export default function Read() {
    const [storageItem, setStorageItem] = useState([])

    const fetchItem = async () => {
        const response = await fetch('http://localhost:3030/items');
        const data = await response.json();
        setStorageItem(data)
        console.log(data)
    }


    useEffect(() => {
        fetchItem()
    }, [])
    

    return (
        <div>
            <ul>
                {storageItem.map((item) => (
                    <li key={item.id}>
                        <div>{item.name}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}