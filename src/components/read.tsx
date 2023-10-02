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
        <div className="bg-slate-100 p-10 m-3 rounded-xl shadow-md">
            <h1 className="text-lg font-bold text-center uppercase">Storage</h1>
            <div className="">
                <ul>
                    {storageItem.map((item) => (
                        <li key={item.id}>
                            <p className="text-sm font-medium m-2">Name</p>
                            <div className="text-sm m-2">{item.name}</div>
                            <p className="text-sm font-medium m-2">Amount</p>
                            <div className="text-sm m-2">{item.amount}</div>
                            <p className="text-sm font-medium m-2">Price</p>
                            <div className="text-sm m-2">{item.price}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
